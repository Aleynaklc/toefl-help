"""
WritingService — TOEFL yazma görevi prompt'ları ve AI geri bildirimi.

Prompt bankaları `data/writing/` klasöründen JSON olarak yüklenir.
AI geri bildirimi Anthropic Claude API ile üretilir.

API key ayarlanmamışsa AIServiceError(503) fırlatılır;
uygulama bu durumda çökmez.
"""

from __future__ import annotations

import json
import random
from pathlib import Path
from typing import Any

import httpx

from app.config import get_settings
from app.core.exceptions import AIServiceError
from app.domain.enums import WritingTaskType
from app.domain.schemas import WritingFeedback, WritingFeedbackCriterion

settings = get_settings()

_DATA_DIR = Path(__file__).resolve().parent.parent.parent / "data" / "writing"

# ---------------------------------------------------------------------------
# Prompt bankaları (uygulama başlarken bir kez yüklenir)
# ---------------------------------------------------------------------------


def _load_json(filename: str) -> list[dict[str, Any]]:
    path = _DATA_DIR / filename
    if not path.exists():
        return []
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def _load_criteria() -> dict[str, Any]:
    path = _DATA_DIR / "criteria.json"
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as f:
        return json.load(f)


_EMAIL_PROMPTS: list[dict[str, Any]] = _load_json("email_prompts.json")
_DISCUSSION_PROMPTS: list[dict[str, Any]] = _load_json("discussion_prompts.json")
_CRITERIA: dict[str, Any] = _load_criteria()


class WritingService:
    """Yazma görevi yönetimi ve AI geri bildirim servisi."""

    # ------------------------------------------------------------------
    # Prompt seçimi
    # ------------------------------------------------------------------

    @staticmethod
    def get_random_prompt(task_type: WritingTaskType) -> dict[str, Any]:
        """Verilen görev türüne göre rastgele bir prompt döndürür."""
        bank = _EMAIL_PROMPTS if task_type == WritingTaskType.EMAIL else _DISCUSSION_PROMPTS
        if not bank:
            raise AIServiceError("Yazma prompt'ları yüklenemedi.")
        return random.choice(bank)

    @staticmethod
    def get_all_prompts(task_type: WritingTaskType) -> list[dict[str, Any]]:
        bank = _EMAIL_PROMPTS if task_type == WritingTaskType.EMAIL else _DISCUSSION_PROMPTS
        return bank

    # ------------------------------------------------------------------
    # AI geri bildirimi
    # ------------------------------------------------------------------

    @staticmethod
    async def get_feedback(
        task_type: WritingTaskType,
        prompt_data: dict[str, Any],
        response_text: str,
    ) -> WritingFeedback:
        """
        Anthropic Claude API ile yazıyı değerlendirir.

        Raises:
            AIServiceError: API key eksikse veya istek başarısız olursa.
        """
        if not settings.anthropic_api_key:
            raise AIServiceError(
                "ANTHROPIC_API_KEY ayarlanmamış. Lütfen .env dosyanıza ekleyin."
            )

        is_email = task_type == WritingTaskType.EMAIL
        criteria_key = "email_criteria" if is_email else "discussion_criteria"
        criteria: list[str] = _CRITERIA.get(criteria_key, [])
        task_label = "Write an Email" if is_email else "Write for an Academic Discussion"

        # Görev açıklaması
        if is_email:
            bullets = "; ".join(prompt_data.get("bullets", []))
            task_desc = (
                f"Scenario: {prompt_data.get('scenario', '')}\n"
                f"The email must address: {bullets}"
            )
        else:
            student_a = prompt_data.get("studentA", {})
            student_b = prompt_data.get("studentB", {})
            task_desc = (
                f"Professor's question: {prompt_data.get('question', '')}\n"
                f"Student A ({student_a.get('name', '')}): {student_a.get('text', '')}\n"
                f"Student B ({student_b.get('name', '')}): {student_b.get('text', '')}"
            )

        criteria_list = "\n".join(f'  - "{c}"' for c in criteria)
        prompt = (
            f'You are an official ETS TOEFL iBT 2026 rater grading a "{task_label}" task '
            f"response, using the real TOEFL iBT 2026 scoring rubric for this task.\n\n"
            f"TASK GIVEN TO THE STUDENT:\n{task_desc}\n\n"
            f'STUDENT\'S RESPONSE:\n"""\n{response_text}\n"""\n\n'
            f"Score the response from 0 to 5 (you may use .5 increments) on these four "
            f"rubric dimensions:\n{criteria_list}\n\n"
            f"Be strict and realistic — do not inflate scores. A 5 means near-native, "
            f"well-elaborated, virtually error-free. A 3 means adequate but with noticeable "
            f"weaknesses. Below 2 means the response barely addresses the task or has serious "
            f"language problems.\n\n"
            f"Respond with ONLY a JSON object (no markdown, no extra text) in this exact shape:\n"
            f"{{\n"
            f'  "overallScore": <number 0-5>,\n'
            f'  "criteria": [\n'
            + ",\n".join(
                f'    {{"name": "{c}", "score": <0-5>, "comment": "<1-2 sentences in Turkish>"}}'
                for c in criteria
            )
            + f"\n  ],\n"
            f'  "strengths": ["<Turkish, short>", "<Turkish, short>"],\n'
            f'  "improvements": ["<Turkish, short, actionable>", "<Turkish, short, actionable>", "<Turkish, short, actionable>"],\n'
            f'  "correctedExample": "<one or two of the student\'s original sentences, rewritten and improved, in English only>"\n'
            f"}}"
        )

        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                resp = await client.post(
                    "https://api.anthropic.com/v1/messages",
                    headers={
                        "x-api-key": settings.anthropic_api_key,
                        "anthropic-version": "2023-06-01",
                        "content-type": "application/json",
                    },
                    json={
                        "model": settings.anthropic_model,
                        "max_tokens": settings.anthropic_max_tokens,
                        "messages": [{"role": "user", "content": prompt}],
                    },
                )
                resp.raise_for_status()
                data = resp.json()
        except httpx.HTTPError as exc:
            raise AIServiceError(f"Anthropic API isteği başarısız: {exc}") from exc

        content_blocks = data.get("content", [])
        text_block = next((b for b in content_blocks if b.get("type") == "text"), None)
        if not text_block:
            raise AIServiceError("AI yanıtında metin bloğu bulunamadı.")

        raw_json = text_block["text"].replace("```json", "").replace("```", "").strip()
        try:
            parsed = json.loads(raw_json)
        except json.JSONDecodeError as exc:
            raise AIServiceError(f"AI yanıtı JSON olarak ayrıştırılamadı: {exc}") from exc

        return WritingFeedback(
            overall_score=parsed["overallScore"],
            criteria=[
                WritingFeedbackCriterion(
                    name=c["name"],
                    score=c["score"],
                    comment=c["comment"],
                )
                for c in parsed.get("criteria", [])
            ],
            strengths=parsed.get("strengths", []),
            improvements=parsed.get("improvements", []),
            corrected_example=parsed.get("correctedExample", ""),
        )
