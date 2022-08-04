import math


def print_pyramid(n: int):
    if n > 100: print("\nPlease, insert only numbers below 100!")
    else:
        print("\n")
        for index in list(range(1, n + 1, 2)):
            side_blank_spaces = math.floor((n - index) / 2)
            print(
                side_blank_spaces * " ",
                index * "*",
                side_blank_spaces * " ",
                sep="",
            )
        print("\n")


pyramid_size = input("What is the pyramid's size? ")
print_pyramid(int(pyramid_size))
