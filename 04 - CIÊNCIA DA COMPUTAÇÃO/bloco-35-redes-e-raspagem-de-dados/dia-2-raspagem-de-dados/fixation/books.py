import requests
from parsel import Selector


BOOKS_URL = "http://books.toscrape.com/"

response = requests.get(BOOKS_URL)
selector = Selector(text=response.text)

# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# prices = selector.css(".product_pod .price_color::text").getall()

for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()

    print({ "title": title, "price": price })
