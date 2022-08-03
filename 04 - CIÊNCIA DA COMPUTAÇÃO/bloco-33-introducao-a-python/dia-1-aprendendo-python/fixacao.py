a = 10
b = 5

# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)
print(a % b)

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
hours = 6
minutes = 60 * hours
seconds = 60 * minutes * hours

print(minutes)
print(seconds)

# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
copies_to_buy = 60
price = 24.2 * (0.4)
transport = 3 + (copies_to_buy - 1) * 0.75

print(copies_to_buy * price + transport)

# --- #
trybe_course = ["Introdução", "Front-end", "Back-end"]
# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")
print(trybe_course)

# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course.index("Introdução")
trybe_course[trybe_course.index("Introdução")] = "Fundamentos"

print(trybe_course)

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set(). Inicialize uma variável com essa função var = set() e adicione seu nome ao conjunto utilizando um dos métodos vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.
name = set({"Guilherme"})
print(name)

# --- #

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info["recorrente"] = "Sim"
print(info)

# Exercício 9: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info["origem"]
print(info)

# Exercício 12: O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.
factorial_result = 1
for n in range(7, 0, -1):
    factorial_result *= n

print(factorial_result)

# Exercício 13: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].
ratings = [6, 8, 5, 9, 10]
new_ratings = [rating*10 for rating in ratings]

print(new_ratings)

# Exercício 14: Percorra a lista do exercício 13 e imprima "Múltiplo de 3" se o elemento for divisível por 3.
for rating in ratings:
    if rating % 3 == 0:
        print(f"var: rating => {rating} é multiplo de 3")
