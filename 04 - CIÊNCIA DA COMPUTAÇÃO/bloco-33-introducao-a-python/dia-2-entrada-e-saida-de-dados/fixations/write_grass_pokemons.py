import json


with open("./assets/pokemons.json") as pokemons_file:
    pokemons = json.load(pokemons_file)["results"]

grass_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("./assets/grass-pokemons.json", "w") as grass_pokemons_file:
    json_to_write = json.dump(grass_pokemons, grass_pokemons_file)
