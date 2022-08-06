from logging import exception
import re


EMAIL_REGEX = r"^[a-zA-Z][\w-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,3}$"

def is_valid_email(email: str):
    if not bool(re.match(EMAIL_REGEX, email)):
        raise ValueError("Email provided is not valid")
    else:
        return True
