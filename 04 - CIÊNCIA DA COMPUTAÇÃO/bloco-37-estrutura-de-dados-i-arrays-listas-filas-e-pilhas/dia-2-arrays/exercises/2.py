# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Complexity: O(n)
def merge_array(array):
    new_array = []
    middle = len(array) // 2
    array_left, array_right = array[:middle], array[middle:]

    for index in range(len(array_right)):
        try:
            new_array.extend([array_left[index], array_right[index]])
        except IndexError:
            new_array.append(array_right[index])

    return new_array


# merge_array([2, 6, 4, 5]) -> [2, 4, 6, 5]
# merge_array([1, 4, 4, 7, 6, 6]) -> [1, 7, 4, 6, 4, 6]
