import secrets
import time


def new_id() -> str:
    return secrets.token_hex(4) + format(int(time.time() * 1000), "x")
