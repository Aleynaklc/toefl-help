"""
Domain şemaları — Pydantic giriş/çıkış modelleri.

Kurallar:
  - Tüm `*Create` şemaları kullanıcıdan gelen veriyi doğrular.
  - Tüm `*Read` şemaları API yanıtını tanımlar.
  - Şemalar DB modellerine veya dış servislere bağımlı değil.
"""

from datetime import datetime

from pydantic import BaseModel, Field, field_validator

from app.domain.enums import PlacementAnswerStatus, QuizMode, WritingTaskType

# ---------------------------------------------------------------------------
# Kelime kartı
# ---------------------------------------------------------------------------

_WORD_MIN = 1
_WORD_MAX = 120
_DEF_MAX = 500
_EXAMPLE_MAX = 1000


class WordBase(BaseModel):
    word: str = Field(min_length=_WORD_MIN, max_length=_WORD_MAX)
    definition: str = Field(default="", max_length=_DEF_MAX)
    example: str = Field(default="", max_length=_EXAMPLE_MAX)
    category: str = Field(default="Genel", max_length=64)


class WordCreate(WordBase):
    pass


class WordRead(WordBase):
    id: str
    box: int = Field(ge=1, le=5, default=1)
    correct_count: int = 0
    wrong_count: int = 0
    last_reviewed: datetime | None = None
    ease_factor: float = 2.5
    next_review_at: datetime | None = None
    repetition_count: int = 0

    model_config = {"from_attributes": True}


class WordBulkCreate(BaseModel):
    text: str = Field(min_length=3, max_length=50_000)
    category: str = Field(default="Genel", max_length=64)


# ---------------------------------------------------------------------------
# Quiz
# ---------------------------------------------------------------------------


class QuizRoundRequest(BaseModel):
    category: str = Field(max_length=64)
    mode: QuizMode = QuizMode.CONTEXT


class QuizAnswerRequest(BaseModel):
    word_id: str
    correct: bool


class QuizOption(BaseModel):
    id: str
    word: str
    definition: str


class QuizQuestion(BaseModel):
    word: WordRead
    options: list[QuizOption]
    uses_context: bool
    blank_sentence: str | None = None


class QuizRoundResponse(BaseModel):
    questions: list[QuizQuestion]
    mode: QuizMode


# ---------------------------------------------------------------------------
# İstatistik
# ---------------------------------------------------------------------------


class StatsSummary(BaseModel):
    total_words: int
    total_attempts: int
    accuracy: int | None
    mastered: int
    box_counts: list[int]
    hardest: list[WordRead]


# ---------------------------------------------------------------------------
# Yazma görevi
# ---------------------------------------------------------------------------

_MIN_WRITING_WORDS = 10
_MAX_WRITING_CHARS = 5_000


class WritingFeedbackCriterion(BaseModel):
    name: str
    score: float
    comment: str


class WritingFeedback(BaseModel):
    overall_score: float
    criteria: list[WritingFeedbackCriterion]
    strengths: list[str]
    improvements: list[str]
    corrected_example: str


class WritingSubmitRequest(BaseModel):
    task_type: WritingTaskType
    prompt_id: str = Field(min_length=1, max_length=128)
    response: str = Field(min_length=1, max_length=_MAX_WRITING_CHARS)

    @field_validator("response")
    @classmethod
    def check_min_words(cls, v: str) -> str:
        """En az 10 kelime olup olmadığını şema seviyesinde doğrular."""
        word_count = len(v.split())
        if word_count < _MIN_WRITING_WORDS:
            raise ValueError(
                f"Yanıt en az {_MIN_WRITING_WORDS} kelime içermelidir "
                f"(şu an: {word_count})."
            )
        return v


# ---------------------------------------------------------------------------
# Seviye testi
# ---------------------------------------------------------------------------


class PlacementProgressLevel(BaseModel):
    answers: dict[str, PlacementAnswerStatus] = Field(default_factory=dict)
    current_index: int = 0
    completed_at: datetime | None = None


class PlacementProgress(BaseModel):
    levels: dict[str, PlacementProgressLevel] = Field(default_factory=dict)
