from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, reversed_cards: bool = False):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        if reversed_cards is True:
            self._cartas.reverse()

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return CartaIterator(self._cartas)


class CartaIterator(Iterator):
    def __init__(self, cartas):
        self.__cartas = cartas
        self.__index = 0

    def __next__(self):
        try:
            carta = self.__cartas[self.__index]
        except:
            raise StopIteration()
        else:
            self.__index += 1
            return carta


cartas = [carta for carta in Baralho(reversed_cards=True)]
print(len(cartas) == 52)
# print(cartas)
