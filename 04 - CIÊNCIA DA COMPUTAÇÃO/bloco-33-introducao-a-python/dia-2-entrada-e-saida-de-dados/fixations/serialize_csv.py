import csv
import json
from pprint import pp

with open("./assets/graduacao_unb.csv", encoding = "utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader


def serialize_data(cols, row):
    obj = {}

    for index, col in enumerate(cols):
        row_col = row[index]
        obj[col] = row_col

    return obj


not_serialized = [data[0], data[1], data[2], data[3]]
subjects = [serialize_data(header, subject) for subject in not_serialized]

with open("./assets/graduacao_unb.json", "w") as file:
    json.dump(subjects, file)
