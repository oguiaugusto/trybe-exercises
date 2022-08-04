import json
from pprint import pp
import random


def get_pokemons(path):
    with open(path) as file:
        pokemons = json.load(file);

    return pokemons["results"]


def get_random_pokemon():
    return random.choice(get_pokemons("./assets/pokemons.json"))["name"]


pokemon = get_random_pokemon()
hint = ""
for letter in pokemon:
    hint_input = f"Quem é esse pokemon? Dica: {hint} \n >> " 
    guess = input("Quem é esse pokemon?\n>> " if hint == "" else hint_input)
    if guess.lower() == pokemon.lower():
        print("\nParabéns, você acertou!")
        break
    elif len(hint) + 1 == len(pokemon):
        print(f"\nQue pena, acabaram as chances. O pokemon era: {pokemon}")
    else:
        hint += letter
