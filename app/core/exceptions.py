class AppError(Exception):
    """Temel uygulama hatası."""

    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class NotFoundError(AppError):
    def __init__(self, message: str = "Kayıt bulunamadı"):
        super().__init__(message, status_code=404)


class AIServiceError(AppError):
    def __init__(self, message: str = "AI servisi şu an kullanılamıyor"):
        super().__init__(message, status_code=503)
