import time
import website_algorithm
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route("/time")
def get_current_time():
    return {"time": time.time()}


@app.route("/website", methods=["POST"])
def get_website():
    body = request.get_json()
    print("BODY:")
    URL = "http://" + body["my_url"]

    data = website_algorithm.classification_algorithm(URL)
    print("HI")
    print(data)
    return data
