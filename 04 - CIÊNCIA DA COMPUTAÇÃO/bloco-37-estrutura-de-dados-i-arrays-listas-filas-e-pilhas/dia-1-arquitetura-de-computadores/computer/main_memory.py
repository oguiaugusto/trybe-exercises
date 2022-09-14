from typing import List


class MainMemory:
    loaded_memory: List[str]

    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            numeric_index = int(index)
            loaded_value = self.loaded_memory[numeric_index]
            return float(loaded_value)
        except (ValueError, IndexError):
            return 0

    def clean(self):
        self.loaded_memory = []