class Calculator:
    @classmethod
    def sum(self, x, y):
        return x + y


class DecoratedCalculator:
    def __init__(self, calculator: Calculator):
        self.calculator = calculator

    def convert_word_to_number(self, number):
        if not isinstance(number, str):
            return number

        return {
            "um": 1, "dois": 2, "três": 3, "quatro": 4, "cinco": 5,
            "seis": 6, "sete": 7, "oito": 8, "nove": 9, "dez": 10,
        }.get(number)

    def sum(self, x, y):
        return self.calculator.sum(
            self.convert_word_to_number(x),
            self.convert_word_to_number(y)
        )


class EnglishDecoratedCalculator(DecoratedCalculator):
    def __init__(self, calculator: Calculator):
        super().__init__(calculator)

    def convert_word_to_number(self, number):
        if not isinstance(number, str):
            return number

        return {
            "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
            "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        }.get(number)


if __name__ == "__main__":
    calculator = Calculator()
    print("10 + 20 =")
    calculator.sum(10, 20)

    decoratored_calculator = DecoratedCalculator(calculator)
    print("'oito' + 'dois' =", decoratored_calculator.sum("oito", "dois"))
    english_decoratored_calculator = EnglishDecoratedCalculator(calculator)
    print("'eight' + 'two' =", english_decoratored_calculator.sum("eight", "two"))
