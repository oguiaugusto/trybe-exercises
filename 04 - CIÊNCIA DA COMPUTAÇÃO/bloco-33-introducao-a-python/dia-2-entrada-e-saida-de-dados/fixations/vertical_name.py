def vertical_print(name: str):
    name = name.upper()
    for letter in name:
        print(letter)


name = input("Digite seu nome: ")
vertical_print(name)