import requests


response = requests.get("https://api.github.com/users")
for user in response.json():
    print(f"{user['login']} {user['url']}")
