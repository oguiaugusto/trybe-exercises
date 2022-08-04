import re


def sum_values(values: str):
    numbers_list = values.split(", ")
    error = False
    result = 0

    for number in numbers_list:
        if not number.isdigit():
            print(f"\nErro ao somar valores, '{number}' é um valor inválido")
            error = True
            break
        else:
            result += float(number)

    if not error:
        return f"Resultado: {result}"


input_values = input("Digite os números a serem somados (1, 2, 3...): ")
print(sum_values(input_values))