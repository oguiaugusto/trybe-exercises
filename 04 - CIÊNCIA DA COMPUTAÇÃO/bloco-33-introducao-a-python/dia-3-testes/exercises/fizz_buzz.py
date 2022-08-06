def fizz_buzz(num: int):
    return_list = []

    for index in list(range(1, num + 1)):
        if index % 3 == 0 and index % 5 == 0: return_list.append("FizzBuzz")
        elif index % 3 == 0: return_list.append("Fizz")
        elif index % 5 == 0: return_list.append("Buzz")
        else: return_list.append(index)

    return return_list


# print(fizz_buzz('a'))