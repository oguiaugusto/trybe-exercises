from get_valid_emails import get_valid_emails

def test_get_valid_emails_returns_valid_emails():
    emails = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]
    expected_return = [emails[0], emails[2]]

    assert get_valid_emails(emails) == expected_return
