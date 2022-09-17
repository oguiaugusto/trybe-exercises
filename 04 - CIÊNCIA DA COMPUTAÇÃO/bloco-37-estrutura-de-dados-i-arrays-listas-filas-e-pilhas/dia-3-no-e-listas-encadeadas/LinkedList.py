from node import Node


class LinkedList:
    def __init__(self):
        self.head = None
        self.__length = 0

    def __repr__(self):
        return f"LinkedList(len={self.__length}, value={self.head})"

    def __str__(self):
        return self.__repr__()

    def __len__(self):
        return self.__length

    def __get_node_at(self, position):
        current_node = self.head
        if not current_node:
            return None

        while position > 0 and current_node.next:
            current_node = current_node.next
            position -= 1

        return current_node

    def is_empty(self):
        return not len(self)

    def clear(self):
        while not self.is_empty():
            self.remove_first()

    def insert_first(self, value):
        new_value = Node(value)
        new_value.next = self.head

        self.head = new_value
        self.__length += 1

    def insert_last(self, value):
        new_value = Node(value)
        previous_last_value = self.__get_node_at(len(self) - 1)

        if not previous_last_value:
            return self.insert_first(value)

        previous_last_value.next = new_value
        self.__length += 1

    def insert_at(self, position, value):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)

        new_value = Node(value)
        previous_value = self.__get_node_at(position - 1)

        new_value.next = previous_value.next
        previous_value.next = new_value

        self.__length += 1

    def remove_first(self):
        removed_value = self.head

        if removed_value:
            self.head = self.head.next

            removed_value.next = None
            self.__length -= 1

        return removed_value

    def remove_last(self):
        if len(self) <= 1:
            self.remove_first()

        previous_last_value = self.__get_node_at(len(self) - 2)

        removed_value = previous_last_value.next
        previous_last_value.next = None

        self.__length -= 1
        return removed_value

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_removed = self.__get_node_at(position - 1)

        removed_value = previous_to_removed.next
        previous_to_removed.next = removed_value.next
        removed_value.next = None

        self.__length -= 1
        return removed_value

    def get_element_at(self, position):
        returned_value = self.__get_node_at(position)

        if returned_value:
            returned_value = Node(returned_value.value)

        return returned_value

    def index_of(self, value):
        current_value = self.head
        index = 0

        while index < len(self):
            if current_value.value == value:
                return index

            current_value = current_value.next
            index += 1

        return -1
