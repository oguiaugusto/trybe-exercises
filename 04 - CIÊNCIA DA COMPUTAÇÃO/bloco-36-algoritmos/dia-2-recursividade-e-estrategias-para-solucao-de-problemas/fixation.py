# Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.
def recursive_sum(num):
    if num == 1:
        return 1
    else:
        return num + recursive_sum(num - 1)
