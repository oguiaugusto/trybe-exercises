import json


def retrieve_pokemons_by_type_reader(type, file):
    pokemons = json.load(file)["results"]
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]

    return pokemons_by_type

def retrieve_pokemons_by_type(type, file_path):
    with open(file_path) as file:
        pokemons = json.load(file)["results"]

        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]

        return pokemons_by_type
