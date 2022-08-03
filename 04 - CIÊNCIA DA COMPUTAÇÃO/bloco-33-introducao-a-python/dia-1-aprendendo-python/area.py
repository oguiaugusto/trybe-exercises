PI = 3.14


def square(side: float or int):
    """Calculate area of square"""
    return side ** 2


def rectangle(length: float or int, width: float or int):
    """Calculate area of rectangle"""
    return length * width


def circle(radius: float or int):
    """Calculate area of a circle"""
    return PI * (radius ** 2)


print(square.__doc__)
if __name__ == '__main__':
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
