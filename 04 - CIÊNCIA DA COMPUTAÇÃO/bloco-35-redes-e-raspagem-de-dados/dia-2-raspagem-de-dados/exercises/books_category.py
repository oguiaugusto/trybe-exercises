import re
from pymongo import MongoClient


category = re.compile(input("What category do you want to find? "), re.IGNORECASE)
with MongoClient() as client:
    db = client.library
    books = [book["title"] for book in db.books.find({ "categories": category })]

    print(books)
