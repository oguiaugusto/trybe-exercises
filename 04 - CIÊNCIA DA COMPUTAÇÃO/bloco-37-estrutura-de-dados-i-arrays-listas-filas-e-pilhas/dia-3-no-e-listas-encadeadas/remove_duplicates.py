# Exercício 3: remover duplicatas de uma LinkedList, atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma LinkedList como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade O(n).
from LinkedList import LinkedList


def remove_duplicates(linked_list: LinkedList):
    unique_elements = set()
    new_list = LinkedList()

    current_element = linked_list.head
    index = 0

    while index < len(linked_list): # O(n) ou O(n²), eu acho
        if current_element.value not in unique_elements:
            new_list.insert_last(current_element.value)
            unique_elements.add(current_element.value)

        current_element = current_element.next
        index += 1

    return new_list


if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.insert_first(5)
    linked_list.insert_first(5)
    linked_list.insert_first(4)
    linked_list.insert_first(3)
    linked_list.insert_first(2)
    linked_list.insert_first(2)
    linked_list.insert_first(2)
    linked_list.insert_first(1)

    new_list = remove_duplicates(linked_list)

    print(new_list)
    print("Before: ", len(linked_list))
    print("After: ", len(new_list))
