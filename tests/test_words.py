"""
WordService birim testleri — toplu metin ayrıştırma.
"""

from __future__ import annotations

import pytest

from app.services.word_service import WordService


# ---------------------------------------------------------------------------
# parse_bulk_text testleri (DB gerektirmez)
# ---------------------------------------------------------------------------


class TestParseBulkText:
    def test_dash_separator(self):
        text = "abandon - terk etmek\nacquire - edinmek"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 2
        assert result[0].word == "abandon"
        assert result[0].definition == "terk etmek"
        assert result[1].word == "acquire"

    def test_em_dash_separator(self):
        text = "abstract — soyut"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 1
        assert result[0].word == "abstract"
        assert result[0].definition == "soyut"

    def test_colon_separator(self):
        text = "benefit: fayda sağlamak"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 1
        assert result[0].word == "benefit"

    def test_comma_fallback(self):
        text = "affect, etkilemek"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 1
        assert result[0].word == "affect"
        assert result[0].definition.strip() == "etkilemek"

    def test_skips_empty_lines(self):
        text = "\n\nabandon - terk etmek\n\n"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 1

    def test_skips_comment_lines(self):
        text = "# Bu bir açıklama\nabandon - terk etmek"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 1

    def test_skips_lines_without_separator(self):
        text = "bu satırda ayırıcı yok"
        result = WordService.parse_bulk_text(text)
        assert len(result) == 0

    def test_category_applied(self):
        text = "abandon - terk etmek"
        result = WordService.parse_bulk_text(text, category="Akademik")
        assert result[0].category == "Akademik"

    def test_default_category(self):
        text = "abandon - terk etmek"
        result = WordService.parse_bulk_text(text)
        assert result[0].category == "Genel"

    def test_mixed_formats(self):
        text = (
            "abandon - terk etmek\n"
            "acquire — edinmek\n"
            "benefit: fayda\n"
            "# yorum satırı\n"
            "\n"
            "affect, etkilemek\n"
        )
        result = WordService.parse_bulk_text(text)
        assert len(result) == 4


# ---------------------------------------------------------------------------
# Entegrasyon testleri (DB gerektirir)
# ---------------------------------------------------------------------------


@pytest.mark.asyncio
async def test_add_words_integration(client):
    """Toplu kelime ekleme endpoint'i çalışmalı."""
    resp = await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek\nacquire - edinmek", "category": "Test"},
    )
    assert resp.status_code == 200
    data = resp.json()
    assert data["added"] == 2
    assert data["skipped"] == 0


@pytest.mark.asyncio
async def test_add_duplicate_words(client):
    """Aynı kelime ikinci eklenmede atlanmalı."""
    payload = {"text": "abandon - terk etmek", "category": "Test"}
    await client.post("/api/words/bulk", json=payload)
    resp = await client.post("/api/words/bulk", json=payload)
    data = resp.json()
    assert data["skipped"] == 1
    assert data["added"] == 0


@pytest.mark.asyncio
async def test_list_words(client):
    """Kelime listesi döndürülmeli."""
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek\nacquire - edinmek", "category": "Test"},
    )
    resp = await client.get("/api/words")
    assert resp.status_code == 200
    assert len(resp.json()) == 2


@pytest.mark.asyncio
async def test_delete_word(client):
    """Kelime silinmeli."""
    # Ekle
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek", "category": "Test"},
    )
    words = (await client.get("/api/words")).json()
    word_id = words[0]["id"]

    # Sil
    resp = await client.delete(f"/api/words/{word_id}")
    assert resp.status_code == 204

    # Listede olmamalı
    words_after = (await client.get("/api/words")).json()
    assert len(words_after) == 0


@pytest.mark.asyncio
async def test_delete_nonexistent_word(client):
    """Olmayan kelime silinmek istendiğinde 404 dönmeli."""
    resp = await client.delete("/api/words/nonexistent_id")
    assert resp.status_code == 404
