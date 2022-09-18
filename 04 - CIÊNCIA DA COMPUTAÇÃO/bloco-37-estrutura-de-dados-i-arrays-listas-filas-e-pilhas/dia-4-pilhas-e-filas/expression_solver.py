from stack import Stack


def solve_expression(expr: str):
    if not expr.endswith(("+", "*")):
        return "Invalid expression"

    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            result = 0
            while not stack.is_empty():
                result += stack.pop()

            stack.push(result)
        elif token == "*":
            result = stack.pop()
            while not stack.is_empty():
                result *= stack.pop()

            stack.push(result)
        else:
            stack.push(float(token))

    return stack.peek()
