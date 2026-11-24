"""Rate limiter — tek kaynak, circular import engelleme.

main.py ve tüm route modülleri buradan `limiter`'ı import eder.
İstemcinin proxy başlıklarına güvenilmez.
"""
from fastapi import Request
from slowapi import Limiter
from slowapi.util import get_remote_address


def real_client_ip(request: Request) -> str:
    """Bağlantının doğrudan eş adresini döndür."""
    return get_remote_address(request)


limiter = Limiter(key_func=real_client_ip)
