# 🚀 Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).
from typing import List


def evens_count(num: int):
    count = 0

    for index in range(1, num + 1):
        if index % 2 == 0:
            count += 1

    return count


# 🚀 Exercício 2: Transforme o algoritmo criado acima em recursivo.
def recursive_evens_count(num: int):
    if num <= 1:
        return 0
    elif num % 2 == 0:
        return 1 + recursive_evens_count(num - 1)
    else:
        return recursive_evens_count(num - 1)


# 🚀 Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
def find_biggest_number(array: List[int]):
    if len(array) <= 1:
        return array[0]
    elif array[0] < array[1]:
        array_without_first_index = array[1:]
        return find_biggest_number(array_without_first_index)
    else:
        array_without_second_index = array[:1] + array[2:]
        return find_biggest_number(array_without_second_index)


# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.
def aux_find_gratest_common_divisor(n1: int, n2: int, divisor: int):
    if divisor == 0:
        return 1
    elif (n1 / divisor).is_integer() and (n2 / divisor).is_integer():
        return divisor
    else:
        print(n1 % divisor)
        print(n2 % divisor)
        print("\n")
        return aux_find_gratest_common_divisor(n1, n2, divisor - 1)

def find_gratest_common_divisor(n1: int, n2: int):
    divisor = max([n1, n2])
    return aux_find_gratest_common_divisor(n1, n2, divisor)


# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.
def aux_is_prime(num: int, counter: int, divisor: int):
    if divisor == 0:
        return counter == 2
    elif num % divisor == 0:
        return aux_is_prime(num, counter + 1, divisor - 1)
    else:
        return aux_is_prime(num, counter, divisor - 1)


def is_prime(num: int):
    return aux_is_prime(num, 0, num)


# Exercício 6: Escreva um algoritmo que recebe uma lista e retorne-a na ordem reversa.
def reverse_list(array: List):
    if len(array) <= 1:
        return array

    return [array[-1]] + reverse_list(array[:len(array) - 1])
