from flask import Flask, render_template, request, flash
import requests
from random import randint
from helpers import base_url

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=['POST'])
def get_lucky_num():
    
    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]
    
    
    