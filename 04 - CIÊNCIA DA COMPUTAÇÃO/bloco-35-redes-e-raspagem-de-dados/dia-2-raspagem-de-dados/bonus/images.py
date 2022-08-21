import requests
from parsel import Selector


BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(BASE_URL)
selector = Selector(text=response.text)
flags = selector.css(".gallerybox img::attr(src)").getall()

for flag in [flags[24]]:
    resized_flag = "/800px".join(flag.split("/120px"))
    filename = resized_flag.split("/")[-1]

    image = requests.get("http:" + resized_flag).content
    with open(f"./flags/{filename}", mode="wb") as file:
        file.write(image)
