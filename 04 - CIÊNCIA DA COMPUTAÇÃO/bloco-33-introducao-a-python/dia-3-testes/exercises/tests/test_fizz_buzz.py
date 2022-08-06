import pytest
from fizz_buzz import fizz_buzz


expected_output_three = [1, 2, "Fizz"]
expected_output_five = expected_output_three + [4, "Buzz"]
expected_output_fifteen = (
    expected_output_five + ["Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
)

def test_fizz_buzz_returns_expected_list_when_input_is_three():
    f"""fizz_buzz should return {expected_output_three} when the input is 3"""

    assert fizz_buzz(3) == expected_output_three


def test_fizz_buzz_returns_expected_list_when_input_is_five():
    f"""fizz_buzz should return {expected_output_five} when the input is 5"""

    assert fizz_buzz(5) == expected_output_five


def test_fizz_buzz_returns_expected_list_when_input_is_fifteen():
    f"""fizz_buzz should return {expected_output_fifteen} when the input is 15"""

    assert fizz_buzz(15) == expected_output_fifteen


def test_fizz_buzz_raises_exception_when_input_is_not_a_int():
    """fizz_buzz should raise an exception when the input is not a integer"""

    with pytest.raises(TypeError, match="can only concatenate str"):
        fizz_buzz("string")
