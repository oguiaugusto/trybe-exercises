from typing import List, Literal, Union


# Exercício 1:
def smaller_number(numbers: List[Union[int, float]]):
    numbers.sort()
    return numbers[0]


# Exercício 2:
def rectangle_triangle(n: int):
    def_heading = f"{n}x{n} rectangle triangle:"
    print(def_heading)
    print(len(def_heading) * "-")

    for row in list(range(1, n + 1)):
        print(row * "* ")

    print(len(def_heading) * "-")


# Exercício 3:
def sum_up_to(n: int):
    result = 0
    for index in list(range(1, n + 1)):
        result += index

    return result


# Exercício 4:
def liters_sold(fuel_type: Literal["A", "G"], liters: int or float):
    price = 1.9 if fuel_type == "G" else 2.5

    discount = 0
    if liters <= 20:
        discount = (0.03 if fuel_type == "A" else 0.04) * liters
    else:
        discount = (0.05 if fuel_type == "G" else 0.06) * liters

    total_price = liters * price
    return total_price - (discount * liters)


numbers_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
if __name__ == '__main__':
    print(f"smaller_number: {smaller_number(numbers_list)}\n")
    rectangle_triangle(5)
    print(f"\nsum_up_to: {sum_up_to(5)}\n")
    print(f"liters_sold: {liters_sold('G', 10)} \n")
