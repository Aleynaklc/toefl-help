import json

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.ids import new_id
from app.db.models import PlacementProgress, User, Word, WritingEntry
from app.domain.schemas import PlacementProgress as PlacementProgressSchema
from app.domain.schemas import WordCreate, WordRead

# Kategori filtresi için sihirli string sabiti — tüm kategorileri göster
ALL_CATEGORIES = "Tümü"


class UserRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_or_create(self, user_id: str) -> User:
        user = await self.session.get(User, user_id)
        if user is None:
            user = User(id=user_id)
            self.session.add(user)
            await self.session.flush()
        return user


class WordRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def list_by_user(self, user_id: str, category: str | None = None) -> list[Word]:
        stmt = select(Word).where(Word.user_id == user_id).order_by(Word.word)
        if category and category != ALL_CATEGORIES:
            stmt = stmt.where(Word.category == category)
        result = await self.session.execute(stmt)
        return list(result.scalars().all())

    async def get(self, user_id: str, word_id: str) -> Word | None:
        stmt = select(Word).where(Word.user_id == user_id, Word.id == word_id)
        result = await self.session.execute(stmt)
        return result.scalar_one_or_none()

    async def add_many(self, user_id: str, items: list[WordCreate]) -> list[Word]:
        created: list[Word] = []
        for item in items:
            word = Word(
                id=new_id(),
                user_id=user_id,
                word=item.word.strip(),
                definition=item.definition.strip(),
                example=item.example.strip(),
                category=item.category or "Genel",
            )
            self.session.add(word)
            created.append(word)
        await self.session.flush()
        return created

    async def delete(self, user_id: str, word_id: str) -> bool:
        word = await self.get(user_id, word_id)
        if not word:
            return False
        await self.session.delete(word)
        return True

    async def update(self, word: Word) -> Word:
        await self.session.flush()
        return word

    async def existing_words_lower(self, user_id: str) -> set[str]:
        stmt = select(Word.word).where(Word.user_id == user_id)
        result = await self.session.execute(stmt)
        return {w.lower() for w in result.scalars().all()}


def word_to_schema(word: Word) -> WordRead:
    return WordRead.model_validate(word)


class PlacementRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_progress(self, user_id: str) -> PlacementProgressSchema:
        row = await self.session.get(PlacementProgress, user_id)
        if not row or not row.data:
            return PlacementProgressSchema()
        raw = json.loads(row.data)
        return PlacementProgressSchema.model_validate({"levels": raw})

    async def save_progress(self, user_id: str, progress: PlacementProgressSchema) -> None:
        row = await self.session.get(PlacementProgress, user_id)
        payload = json.dumps(
            {k: v.model_dump(mode="json") for k, v in progress.levels.items()},
            ensure_ascii=False,
        )
        if row is None:
            row = PlacementProgress(user_id=user_id, data=payload)
            self.session.add(row)
        else:
            row.data = payload
        await self.session.flush()


class WritingRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def add_entry(
        self,
        user_id: str,
        task_type: str,
        prompt_id: str,
        prompt_title: str,
        response: str,
        overall_score: float | None,
        feedback_json: str | None,
    ) -> WritingEntry:
        entry = WritingEntry(
            id=new_id(),
            user_id=user_id,
            task_type=task_type,
            prompt_id=prompt_id,
            prompt_title=prompt_title,
            response=response,
            overall_score=overall_score,
            feedback_json=feedback_json,
        )
        self.session.add(entry)
        await self.session.flush()
        return entry

    async def list_recent(self, user_id: str, limit: int = 20) -> list[WritingEntry]:
        stmt = (
            select(WritingEntry)
            .where(WritingEntry.user_id == user_id)
            .order_by(WritingEntry.created_at.desc())
            .limit(limit)
        )
        result = await self.session.execute(stmt)
        return list(result.scalars().all())
