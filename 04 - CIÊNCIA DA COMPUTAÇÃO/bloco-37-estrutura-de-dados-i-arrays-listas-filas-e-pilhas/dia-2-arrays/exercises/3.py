# Exercício 3 Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

# Complexity: O(n²)
def good_pairs(array):
    pairs_count = 0
    index = 0

    for value in array:
        for next_value in array[index + 1:]:
            if value == next_value:
                pairs_count += 1

        index += 1

    return pairs_count


# good_pairs([1, 3, 1, 1, 2, 3]) -> 4
# good_pairs([1, 1, 2, 3]) -> 1
