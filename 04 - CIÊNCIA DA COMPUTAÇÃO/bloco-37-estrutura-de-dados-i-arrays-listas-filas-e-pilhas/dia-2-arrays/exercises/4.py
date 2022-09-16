# Exercício 4 Você têm dois arrays de números inteiros que representam: (I) instantes de entrada e saídas em uma biblioteca (II) um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou e saiu da biblioteca.

# Complexity = O(n)
def students_at_the_time(inputs, outputs, time):
    students_count = 0
    size = (len(inputs) + len(outputs)) // 2

    for index in range(size):
        if inputs[index] <= time <= outputs[index]:
            students_count += 1

    return students_count


# students_at_the_time([1, 2, 3], [3, 2, 7], 4) -> 1
# students_at_the_time([1, 2, 3, 4], [3, 2, 7, 6], 4) -> 2
