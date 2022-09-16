# 🚀 Exercício 1 Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# Complexity: O(n)
def max_stable_time(values):
    hours = 0
    current_hours = 0

    for value in values:
        if bool(value):
            current_hours += 1
        else:
            current_hours = 0

        if current_hours > hours:
            hours = current_hours

    return hours


# max_stable_time([0, 1, 1, 1, 0, 0, 1, 1]) -> 3
# max_stable_time([1, 1, 1, 1, 0, 0, 1, 1]) -> 4