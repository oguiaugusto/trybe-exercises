from abc import abstractmethod


class Orcamento:
    @abstractmethod
    def calcular_imposto(self):
        raise NotImplementedError


class INSS(Orcamento):
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.1


class ICMS(Orcamento):
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.06


class PIS(Orcamento):
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.0065


class COFINS(Orcamento):
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self):
        return self.valor * 0.03

VALOR = 1000
print(f"ISS: {INSS(VALOR).calcular_imposto()}")
print(f"ICMS: {ICMS(VALOR).calcular_imposto()}")
print(f"PIS: {PIS(VALOR).calcular_imposto()}")
print(f"COFINS: {COFINS(VALOR).calcular_imposto()}")