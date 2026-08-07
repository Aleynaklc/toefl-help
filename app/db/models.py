from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String, Text, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[str] = mapped_column(String(32), primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    words: Mapped[list["Word"]] = relationship(back_populates="user", cascade="all, delete-orphan")
    placement_progress: Mapped["PlacementProgress | None"] = relationship(
        back_populates="user", cascade="all, delete-orphan", uselist=False
    )
    writing_entries: Mapped[list["WritingEntry"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )


class Word(Base):
    __tablename__ = "words"
    __table_args__ = (UniqueConstraint("user_id", "word", name="uq_user_word"),)

    id: Mapped[str] = mapped_column(String(32), primary_key=True)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    word: Mapped[str] = mapped_column(String(255), index=True)
    definition: Mapped[str] = mapped_column(Text)
    example: Mapped[str] = mapped_column(Text, default="")
    category: Mapped[str] = mapped_column(String(128), default="Genel", index=True)
    box: Mapped[int] = mapped_column(Integer, default=1)
    correct_count: Mapped[int] = mapped_column(Integer, default=0)
    wrong_count: Mapped[int] = mapped_column(Integer, default=0)
    last_reviewed: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    user: Mapped["User"] = relationship(back_populates="words")


class PlacementProgress(Base):
    __tablename__ = "placement_progress"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), primary_key=True)
    data: Mapped[str] = mapped_column(Text, default="{}")
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    user: Mapped["User"] = relationship(back_populates="placement_progress")


class WritingEntry(Base):
    __tablename__ = "writing_entries"

    id: Mapped[str] = mapped_column(String(32), primary_key=True)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    task_type: Mapped[str] = mapped_column(String(32))
    prompt_id: Mapped[str] = mapped_column(String(64))
    prompt_title: Mapped[str] = mapped_column(String(255))
    response: Mapped[str] = mapped_column(Text)
    overall_score: Mapped[float | None] = mapped_column(nullable=True)
    feedback_json: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    user: Mapped["User"] = relationship(back_populates="writing_entries")
