import requests
from parsel import Selector


BASE_URL = "http://books.toscrape.com/"
response = requests.get(BASE_URL + "catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()
price = selector.css(".product_main .price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css(".product_page #product_description ~ p::text").get()
thumbnail = BASE_URL + selector.css("#product_gallery .thumbnail img::attr(src)").get()
books_available = selector.css(".product_main .availability::text").re_first(r"\d")

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
description = description.strip()

print(title, price, description, thumbnail, books_available, sep=", ")
