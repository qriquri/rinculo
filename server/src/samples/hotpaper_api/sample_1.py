import os
from typing import Literal
from dotenv import load_dotenv
import requests

load_dotenv(".env")

HOTPAPER_API_KEY = os.environ.get("HOTPAPER_API_KEY")

print(HOTPAPER_API_KEY)

HOTOPAPER_BASE_URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/"

HOTPAPER_URL_FORMAT = "{base_url}/?key={key}&lat={lat}&lng={lng}&range={range}&start={start}&count={count}&format={format}"

DEFAULT_RANGE = "3000"
range_dict = {"300": 1, "500": 2, "1000": 3, "2000": 4, "3000": 5}

FormatType = Literal["xml", "json"]
data_format: FormatType = "json"

count = 2
assert 1 <= count <= 100

lat = 34.67
lng = 135.52

url = HOTPAPER_URL_FORMAT.format(
    base_url=HOTOPAPER_BASE_URL,
    key=HOTPAPER_API_KEY,
    lat=lat,
    lng=lng,
    range=range_dict[DEFAULT_RANGE],
    start=1,
    count=count,
    format=data_format,
)

res = requests.get(url=url, timeout=3000)

print(res.status_code)
res_json = res.json()
print(res_json)

shops = res_json["results"]["shop"]
print(len(shops))
