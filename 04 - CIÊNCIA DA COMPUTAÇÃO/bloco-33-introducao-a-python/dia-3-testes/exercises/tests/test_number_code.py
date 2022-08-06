import pytest
from number_code import number_code


def test_number_code_returns_expected_numbers_with_small_length_input():
    expected_value = "1-4663-79338-4663"
    assert number_code("1-HOME-SWEET-HOME") == expected_value


def test_number_code_returns_expected_numbers_with_big_length_input():
    expected_value = "843-78425-27696-369-58677-6837-843-5299-364"
    assert number_code("The quick brown fox jumps over the lazy dog") == expected_value


def test_number_code_returns_error_message_when_characters_are_invalid():
    expected_message = "Input can only contain letters, hyphens (-), 0 and 1"
    assert number_code("123123123") == expected_message
    assert number_code("") == expected_message


def test_number_code_raises_exeption_when_input_is_not_a_string():
    with pytest.raises(TypeError, match="expected string"):
        number_code(123)
