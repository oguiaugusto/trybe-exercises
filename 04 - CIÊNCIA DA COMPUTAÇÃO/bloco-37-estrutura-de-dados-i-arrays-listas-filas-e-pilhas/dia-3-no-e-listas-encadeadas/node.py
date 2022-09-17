class Node:
    def __init__(self, value):
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para outro nó

    def __repr__(self):
        return f"Node(value={self.value}, next={self.next})"

    def __str__(self):
        return self.__repr__()
