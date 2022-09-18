from stack import Stack


def solve_expression(expr: str):
    if not expr.endswith(("+", "*", "-", "/")):
        return "Invalid expression"

    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            n2 = stack.pop()
            n1 = stack.pop()

            result = n1 - n2
            stack.push(result)
        elif token == "/":
            n1 = stack.pop()
            n2 = stack.pop()

            result = n2 / n1
            stack.push(result)
        else:
            stack.push(float(token))

    return stack.peek()
