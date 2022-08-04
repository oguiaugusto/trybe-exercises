import csv
import json


with open("./assets/books.json") as books_file:
    books = json.load(books_file)
    categories = {
        category: 0 for book in books for category in book["categories"]
    }

    for book in books:
        for category in book["categories"]:
            categories[category] += 1

    categories_percentages = {}
    for category, qty in categories.items():
        categories_percentages[category] = qty / len(books)


with open("./assets/books_categories.csv", mode="w") as books_csv:
    writer = csv.writer(books_csv)
    
    headers = ["categoria", "porcentagem"]
    writer.writerow(headers)

    for category, qty in categories_percentages.items():
        rows = [category, qty]
        writer.writerow(rows)