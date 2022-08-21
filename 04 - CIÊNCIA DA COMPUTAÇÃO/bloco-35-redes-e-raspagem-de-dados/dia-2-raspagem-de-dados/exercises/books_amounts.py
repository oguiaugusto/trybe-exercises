from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    pipelines = [
        { "$match": { "status": "PUBLISH" } },
        { "$unwind": "$categories" },
        { "$group": { "_id": "$categories", "amount": { "$sum": 1 } } },
        { "$sort": { "amount": -1 } }
    ]

    for category in db.books.aggregate(pipelines):
        print(f"{category['_id']} {category['amount']}")
