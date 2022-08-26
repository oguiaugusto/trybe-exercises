from random import randint


# Exercício 1: Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False

# Melhor caso: O(n log n) + O(2)
# Pior caso: O(n log n) + O(n)
# Caso médio: O(n log n) + O(n * 1/2)
# -- Nesse caso, por conta do sort, todos os casos ficariam em O(n log n), para simplificar.


# 🚀 Exercício 2: Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo.
def battleship(grid, x, y):
    if grid[x][y] == 1:
        return True

    return False


grid = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1]]
battleship(grid, 0, 4) # True
battleship(grid, 1, 1) # False
# Complexidade de tempo: O(1)
# Complexidade de espaço: O(1)


# 🚀 Exercício 3: Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?
def array_from_average(num):
    averages = []

    for _ in range(100):
        average = 0

        for __ in range(num):
            average += randint(1, num)

        averages.append(average / num)

    return averages

# Complexidade de tempo: O(n)
# Complexidade de espaço: O(1)


# Exercício 4: Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.
def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


kids_with_candies([2, 3, 5, 1, 3], 3) # [True, True, True, False, True]
# Complexidade de espaço: O(n)
# Melhor caso: O(n) + O(n) = O(n)
# Pior caso: O(n) - mesmo caso que o de cima
# Caso médio: O(n) - mesmo caso que o de cima

# P.S.: eu não tenho certeza