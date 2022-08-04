
def print_vertical(value: str):
    value_list = list(value.upper())
    for i in value:
        print(" ".join(value_list))
        del value_list[-1]


name = input("Digite seu nome: ")
print_vertical(name)
