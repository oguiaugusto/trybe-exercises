import pytest
from is_valid_email import is_valid_email


def test_is_valid_email_returns_true_if_email_is_valid():
    assert is_valid_email("email@gmail.com") is True
    assert is_valid_email("email-123_word@email2.com") is True


def test_is_valid_email_raises_error_if_prefix_is_invalid():
    with pytest.raises(ValueError, match="Email provided is not valid"):
        is_valid_email("1email@email.com")

    with pytest.raises(ValueError, match="Email provided is not valid"):
        is_valid_email("email!@email.com")


def test_is_valid_email_raises_error_if_domain_is_invalid():
    with pytest.raises(ValueError, match="Email provided is not valid"):
        is_valid_email("email@not_valid.com")


def test_is_valid_email_raises_error_if_domain_extension_is_invalid():
    with pytest.raises(ValueError, match="Email provided is not valid"):
        is_valid_email("email@email.notvalid")
