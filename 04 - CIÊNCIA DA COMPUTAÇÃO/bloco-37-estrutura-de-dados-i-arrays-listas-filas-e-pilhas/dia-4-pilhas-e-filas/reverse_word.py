from stack import Stack


def reverse_word(word: str):
    final_word = ""
    between_parentheses = False
    backwards_stack = Stack()

    for char in word:
        if char == "(":
            between_parentheses = True
        elif between_parentheses and char == ")":
            while not backwards_stack.is_empty():
                final_word += backwards_stack.pop()
            between_parentheses = False
        elif between_parentheses:
            backwards_stack.push(char)
        else:
            final_word += char

    return final_word


if __name__ == "__main__":
    print(reverse_word('teste(lagel)'))
    print(reverse_word('(abcd)'))
    # print(reverse_word('(u(love)i)'))
    # print(reverse_word('(ed(et(oc))el)'))
    # print(reverse_word('a(bcdefghijkl(mno)p)q'))
    # Não deu totalmente certo
