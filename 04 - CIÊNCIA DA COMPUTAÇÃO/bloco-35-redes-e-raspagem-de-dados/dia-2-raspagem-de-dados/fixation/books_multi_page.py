import requests
from parsel import Selector
from pymongo import MongoClient


BASE_URL = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(BASE_URL + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")[0]
        
        details_link = product.css(".image_container a::attr(href)").get()
        details_response = requests.get(BASE_URL + details_link)
        details_selector = Selector(text=details_response.text)
        description = details_selector.css("#product_description ~ p::text").get()

        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]

        with MongoClient() as client:
            db = client.catalogue
            db.books.insert_one({ "title": title, "price": price, "description": description })

    next_page_url = selector.css(".next a::attr(href)").get()
