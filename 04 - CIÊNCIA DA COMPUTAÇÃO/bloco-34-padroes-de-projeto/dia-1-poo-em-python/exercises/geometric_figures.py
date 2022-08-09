from abc import abstractmethod
from math import pi as PI


class GeometricFigure():
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimeter(self):
        raise NotImplementedError


class Square(GeometricFigure):
    def __init__(self, side: int or float):
        self.side = side


    def area(self):
        return self.side ** 2


    def perimeter(self):
        return self.side * 4


class Rectangle(GeometricFigure):
    def __init__(self, base: int or float, height: int or float):
        self.base = base
        self.height = height


    def area(self):
        return self.base * self.height


    def perimeter(self):
        return (self.base + self.height) * 2


class Circle(GeometricFigure):
    def __init__(self, radius: int or float):
        self.radius = radius


    def area(self):
        return self.radius ** 2 * PI


    def perimeter(self):
        return self.radius * 2 * PI
