from abc import abstractmethod


class Graphic():
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class BarGraph(Graphic):
    def __init__(self, dados):
        self.dados = dados


    def draw(self):
        print(f"Implementar grafico de barras: {self.dados}")


class RadarGraph(Graphic):
    def __init__(self, dados):
        self.dados = dados


    def draw(self):
        print(f"Implementar grafico radar: {self.dados}")


class PizzaGraph(Graphic):
    def __init__(self, dados):
        self.dados = dados


    def draw(self):
        print(f"Implementar grafico de pizza: {self.dados}")


bar_graph = BarGraph(["Dado1", "Dado2", "Dado3"])
bar_graph.draw()

radar_graph = RadarGraph(["Dado1", "Dado2", "Dado3"])
radar_graph.draw()

pizza_graph = PizzaGraph(["Dado1", "Dado2", "Dado3"])
pizza_graph.draw()
