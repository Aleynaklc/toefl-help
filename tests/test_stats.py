"""
Stats endpoint testleri.
"""

from __future__ import annotations

import pytest


@pytest.mark.asyncio
async def test_stats_empty(client):
    """Kelimesiz kullanıcı için sıfır istatistik dönmeli."""
    resp = await client.get("/api/stats")
    assert resp.status_code == 200
    data = resp.json()
    assert data["total_words"] == 0
    assert data["total_attempts"] == 0
    assert data["accuracy"] is None
    assert data["mastered"] == 0
    assert data["box_counts"] == [0, 0, 0, 0, 0]
    assert data["hardest"] == []


@pytest.mark.asyncio
async def test_stats_after_adding_words(client):
    """Kelime eklendikten sonra istatistik güncellenmeli."""
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek\nacquire - edinmek", "category": "Test"},
    )
    resp = await client.get("/api/stats")
    data = resp.json()
    assert data["total_words"] == 2
    assert data["box_counts"][0] == 2  # İkisi de box 1'de


@pytest.mark.asyncio
async def test_stats_accuracy_after_quiz(client):
    """Quiz cevaplarından sonra doğruluk oranı hesaplanmalı."""
    await client.post(
        "/api/words/bulk",
        json={"text": "abandon - terk etmek", "category": "Test"},
    )
    words = (await client.get("/api/words")).json()
    word_id = words[0]["id"]

    # 1 doğru, 1 yanlış
    await client.post("/api/quiz/answer", json={"word_id": word_id, "correct": True})
    await client.post("/api/quiz/answer", json={"word_id": word_id, "correct": False})

    resp = await client.get("/api/stats")
    data = resp.json()
    assert data["total_attempts"] == 2
    assert data["accuracy"] == 50
