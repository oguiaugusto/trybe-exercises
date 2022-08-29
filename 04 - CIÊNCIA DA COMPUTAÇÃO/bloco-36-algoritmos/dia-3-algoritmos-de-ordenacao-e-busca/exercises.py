from random import shuffle
from typing import List
from sort.insertion_sort import insertion_sort
from sort.selection_sort import selection_sort
from sort.merge_sort import merge_sort
from sort.bubble_sort import bubble_sort
from timer import Timer


# Exercício 1 Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"], após duas iterações utilizando bubble sort, como estaria este array?
# R: ["elefante", "arara", "javali", "macaco", "zebra"]


# Exercício 2 Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando merge sort. Comece o passo a passo a partir da linha abaixo:
# 7 3  5 4  6 8  2 1

# 7  3  5  4  6  8  2  1

# 3 7  4 5  6 8  1 2

# 3 4 5 7  1 2 6 8

# 1 2 3 4 5 6 7 8


# Exercício 3 Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
ordered = list(range(10000)) # mude também para 10.000, 100.000 e 1.000.000
reverse_ordered = list(reversed(ordered))
random = ordered[:] # copia dos ordenados
shuffle(random) # embaralha eles

# print("insertion_sort -->")
# with Timer("insertion_sort"):
#     insertion_sort(ordered)

# print("selection_sort -->")
# with Timer("selection_sort"):
#     insertion_sort(reverse_ordered)


# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.
# O merge sort é mais rápido que o bubble sort
print("merge_sort -->")
with Timer("merge_sort"):
    merge_sort(random)

print("bubble_sort -->")
with Timer("bubble_sort"):
    merge_sort(random)


# Exercício 6 Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um array de booleanos, descubra o indíce onde o erro ocorreu pela primeira vez.
def find_first_error_index(commits: List[bool]):
    start_index = 0
    final_index = len(commits)

    while start_index <= final_index:
        middle_index = (start_index + final_index) // 2

        if commits[middle_index] is False:
            final_index = middle_index - 1
        else:
            start_index = middle_index + 1

    return start_index


commits1 = [True, True, True, True, False, False, False]
print(find_first_error_index(commits1))

commits2 = [True, True, False, False, False, False, False]
print(find_first_error_index(commits2))
