import random


with open("./assets/words.txt") as words_file:
    random_words = [word.strip() for word in words_file.readlines()]


def get_random_word():
    return random.choice(random_words)


def scramble_word(word: str):
    return "".join(random.sample(word, len(word)))


max_attemps = 3
attempts = 1
random_word = get_random_word()
scrambled_word = scramble_word(random_word)
while attempts <= max_attemps:
    word = input(f"A palavra é: \"{scrambled_word}\"\n>> ")
    if word == random_word:
        print("\nParabéns, você acertou!")
        attempts = max_attemps + 1
    elif attempts == max_attemps:
        attempts = max_attemps + 1
        print(f"\nQue pena, acabaram as chances. A palavra era: {random_word}")
    else:
        print("\nTente novamente!")
        attempts += 1

