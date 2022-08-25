# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result

# Complexidade de Tempo: O(n)
# Complexidade de Espaço: O(1)


# Exercício 2: Meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# meu_array = [1, 2, 3, 4, 5]
meu_array = [1, 2, 3, 4, 5, 6, 7]
multiply_arrays(meu_array, meu_array)


# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de O(n³)!
def cubic_complexity(array):
    result = []

    for num1 in array:
        for num2 in array:
            for num3 in array:
                result.append((num1 + num2) * num3)

    print(result)
    return result


arr = [1, 2]
cubic_complexity(arr)


# Exercício 4: Imagine que você recebe dois arrays de tamanho igual, array1 e array2. Para cada elemento do array1, realize uma busca binária no array2. Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).
def logarithm_complexity(array1, array2): # O(n * log n) ou O(n log n)
    def binary_search(numbers, target): return

    for num in array1: # O(n)
        binary_search(array2, num) # O(log n)


# Constantes: O(1);
# Logarítmicos: O(log n);
# Linear: O(n);
# Quadráticos: O(n²);
# Cúbicos: O(n³);
# Exponencial: O(2ⁿ);
# Fatorial: O(n!).
