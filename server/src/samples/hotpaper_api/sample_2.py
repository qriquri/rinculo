import os
from typing import Literal
from dotenv import load_dotenv
import requests

load_dotenv(".env")

HOTPAPER_API_KEY = os.environ.get("HOTPAPER_API_KEY")

print(HOTPAPER_API_KEY)

HOTOPAPER_GENRE_URL = "http://webservice.recruit.co.jp/hotpepper/genre/v1/"

HOTPAPER_URL_FORMAT = "{base_url}/?key={key}&format={format}"

FormatType = Literal["xml", "json"]
data_format: FormatType = "json"

url = HOTPAPER_URL_FORMAT.format(
    base_url=HOTOPAPER_GENRE_URL,
    key=HOTPAPER_API_KEY,
    format=data_format,
)

res = requests.get(url=url, timeout=3000)

print(res.status_code)
res_json = res.json()
print(res_json)

genres = res_json["results"]["genre"]
print(len(genres))
