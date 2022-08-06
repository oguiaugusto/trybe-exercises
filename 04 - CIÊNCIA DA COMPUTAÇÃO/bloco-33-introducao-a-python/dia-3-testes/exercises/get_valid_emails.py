from typing import List

from is_valid_email import is_valid_email


def is_valid_email_no_exception(email: str):
    try: return is_valid_email(email)
    except: return False


def get_valid_emails(emails: List[str]):
    valid_emails = [
        email for email in emails if is_valid_email_no_exception(email)
    ]

    return valid_emails


print(get_valid_emails(["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]))
