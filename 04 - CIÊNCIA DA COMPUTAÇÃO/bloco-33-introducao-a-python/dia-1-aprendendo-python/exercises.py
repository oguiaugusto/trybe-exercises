import math
from typing import List, Union


# 🚀 Exercício 1:
def bigger_number(n1, n2):
    return n1 if n1 > n2 else n2


# 🚀 Exercício 2:
def calculate_average(numbers: List[Union[int, float]]):
    total = 0
    for number in numbers:
        total += number

    return total / len(numbers)


# Exercício 3:
def asterisk_square(n):
    def_heading = f"{n}x{n} square:"
    print(def_heading)
    print(len(def_heading) * "-")

    for row in list(range(n)):
        print(n * "* ")

    print(len(def_heading) * "-")


# 🚀 Exercício 4:
def bigger_name(names: List[str]):
    def name(e):
        return len(e)
    names.sort(reverse=True, key=name)

    return names[0]


# Exercício 5:
def paints_to_buy(m2: int):
    liters = math.ceil(m2 / 3)
    cans_to_buy = math.ceil(liters / 18)
    price = cans_to_buy * 80

    return (cans_to_buy, price)


# Exercício 6:
def triangle_type(s1, s2, s3):
    is_triangle = s1 + s2 > s3 and s2 + s3 > s1 and s3 + s1 > s2

    if not is_triangle:
        return "não é triângulo"
    if s1 == s2 and s2 == s3:
        return "equilátero"
    elif s1 == s2 or s2 == s3 or s3 == s1:
        return "isósceles"
    else:
        return "escaleno"


names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
if __name__ == "__main__":
    print(f"bigger_number: {bigger_number(10, 5)}\n")
    print(f"calculate_average: {calculate_average(list([10, 20, 30]))}\n")
    asterisk_square(4)
    print(f"\nbigger_name: {bigger_name(names_list)}\n")
    print(f"paints_to_buy: {paints_to_buy(108)}\n")
    print(f"triangle_type: {triangle_type(15, 15, 15)}\n")
