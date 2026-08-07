from enum import StrEnum


class QuizMode(StrEnum):
    MEANING = "meaning"
    CONTEXT = "context"


class WritingTaskType(StrEnum):
    EMAIL = "email"
    DISCUSSION = "discussion"


class PlacementAnswerStatus(StrEnum):
    KNOW = "know"
    PARTIAL = "partial"
    UNKNOWN = "unknown"


class WordBucket(StrEnum):
    NOUN = "noun"
    VERB = "verb"
    ADJECTIVE = "adjective"
    ADVERB = "adverb"
    OTHER = "other"
