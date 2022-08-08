from types import NoneType
from typing import List


class Person():
    def __init__(self, name: str, age: int, nationality: str or NoneType = None):
        self.name = name
        self.age = age
        self.__account_balance = nationality


class Teacher(Person):
    def __init__(self, name: str, age: int, subjects: List[str] = []):
        super().__init__(name, age)

        self.subjects = subjects


person = Person("Person da Silva", 19, 100.00)
person = Person("Professor da Silva", 40, ["Matemática", "Física"])
