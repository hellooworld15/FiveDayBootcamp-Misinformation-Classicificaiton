import time
import website_algorithm
from flask import Flask

app = Flask(__name__)


@app.route("/time")
def get_current_time():
    return {"time": time.time()}


@app.route("/website")
def get_website():

    return website_algorithm.classification_algorithm("https://www.health.nsw.gov.au/")
