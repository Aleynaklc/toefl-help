"""
Quiz servisi birim testleri.
"""

from __future__ import annotations

import pytest

from app.services.quiz_service import _make_blank, _pick_weighted, _weight_for_box


# ---------------------------------------------------------------------------
# Birim testleri (DB gerektirmez)
# ---------------------------------------------------------------------------


class TestWeightForBox:
    def test_box_1_has_highest_weight(self):
        assert _weight_for_box(1) == 5

    def test_box_5_has_lowest_weight(self):
        assert _weight_for_box(5) == 1

    def test_all_boxes(self):
        expected = {1: 5, 2: 4, 3: 3, 4: 2, 5: 1}
        for box, weight in expected.items():
            assert _weight_for_box(box) == weight


class TestMakeBlank:
    def test_replaces_word_with_blank(self):
        result = _make_blank("She will abandon the project.", "abandon")
        assert "___" in result
        assert "abandon" not in result

    def test_case_insensitive(self):
        result = _make_blank("She will Abandon the project.", "abandon")
        assert "___" in result

    def test_only_first_occurrence(self):
        result = _make_blank("abandon or not abandon?", "abandon")
        assert result.count("___") == 1

    def test_sentence_without_word(self):
        result = _make_blank("She went home.", "acquire")
        assert result == "She went home."


# ---------------------------------------------------------------------------
# Entegrasyon testleri (DB gerektirir)
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_quiz_round_requires_words(client):
    """Kelimesiz quiz turu 422 dönmeli."""
    resp = await client.post(
        "/api/quiz/round",
        json={"category": "Tümü", "mode": "meaning"},
    )
    assert resp.status_code == 422


@pytest.mark.asyncio
async def test_quiz_round_generates_questions(client):
    """Yeterli kelimeyle quiz turu oluşturulmalı."""
    # Kelimeler ekle
    words_text = "\n".join(
        [f"word{i} - definition{i}" for i in range(10)]
    )
    await client.post(
        "/api/words/bulk",
        json={"text": words_text, "category": "Test"},
    )

    resp = await client.post(
        "/api/quiz/round",
        json={"category": "Test", "mode": "meaning"},
    )
    assert resp.status_code == 200
    data = resp.json()
    assert "questions" in data
    assert len(data["questions"]) <= 7
    assert len(data["questions"]) > 0


@pytest.mark.asyncio
async def test_quiz_answer_updates_box(client):
    """Doğru cevap box'ı artırmalı."""
    # Kelime ekle
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek", "category": "Test"},
    )
    words = (await client.get("/api/words")).json()
    word_id = words[0]["id"]
    initial_box = words[0]["box"]

    # Doğru cevap
    resp = await client.post(
        "/api/quiz/answer",
        json={"word_id": word_id, "correct": True},
    )
    assert resp.status_code == 200
    assert resp.json()["box"] == min(5, initial_box + 1)


@pytest.mark.asyncio
async def test_quiz_wrong_answer_decreases_box(client):
    """Yanlış cevap box'ı azaltmalı."""
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek", "category": "Test"},
    )
    words = (await client.get("/api/words")).json()
    word_id = words[0]["id"]
    initial_box = words[0]["box"]

    resp = await client.post(
        "/api/quiz/answer",
        json={"word_id": word_id, "correct": False},
    )
    assert resp.status_code == 200
    assert resp.json()["box"] == max(1, initial_box - 1)
