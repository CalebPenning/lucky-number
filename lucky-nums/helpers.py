from flask import request, flash, jsonify
from requests import get
base_url = "https://numbersapi.com"

res = get(base_url + "/42")

print(res)