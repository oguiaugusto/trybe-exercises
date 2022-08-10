from db import DbSimulator, DatabaseIterable


record_paginator = DatabaseIterable(DbSimulator(), "select * from person")


# for page in record_paginator:
#     for record in page:
#         print(record["name"])


person_table = [
    {"name": "Morgana", "age": "22"},
    {"name": "Sarah", "age": "24"},
    {"name": "Will", "age": "33"},
    {"name": "Rick", "age": "23"},
    {"name": "John", "age": "22"},
    {"name": "Peter", "age": "35"},
    {"name": "Groove", "age": "48"},
    {"name": "Sam", "age": "19"},
]


person_iterable = iter(person_table)
print(next(person_iterable))
print(next(person_iterable))
print(next(person_iterable))
