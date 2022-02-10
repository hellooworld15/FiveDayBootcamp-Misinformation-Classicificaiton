import requests
import random
import selenium
import time
import pandas as pd
import json
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.utils import ChromeType
from selenium.webdriver import ChromeOptions
from selenium.common.exceptions import NoSuchElementException
from oauth2client.service_account import ServiceAccountCredentials
from spellchecker import SpellChecker
from bs4 import BeautifulSoup
from htmldate import find_date
from datetime import datetime as dt
import os

# Take input from front-end
link = "https://www.health.nsw.gov.au/"
options = ChromeOptions()
options.add_argument("--headless")

# Web-scraper to collect data


if "PLATFORM" in os.environ and os.environ["PLATFORM"] == "arch-linux":
    driver = webdriver.Chrome(
        ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install(), options=options
    )
else:
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

driver.get(link)

### METRICS ###

## 1.  Lets you search past content: Boolean - functionality to search archives with key words


def has_past_content(link):
    num = random.randint(0, 1)
    if num <= 0.5:
        return True
    else:
        return False


## 2. URL ends in trusted domains (e.g .edu, .org, .gov and .net) or Is a news/trusted organisation


def has_trusted_domain(link):
    trusted_domains = [".edu", ".org", ".gov"]
    for i in range(0, len(trusted_domains)):
        if trusted_domains[i] in link:
            return True
    return False


def has_external_sources(link):
    num = random.randint(0, 1)
    if num <= 0.5:
        return True
    else:
        return False


def has_updated(link):
    print(link)
    print("ISSUES EREEHHEE")
    updated_date = dt.strptime(find_date(link), "%Y-%m-%d")
    threshold = dt.strptime("2017-02-10", "%Y-%m-%d")
    difference = updated_date - threshold
    print(difference)
    if updated_date > threshold:
        return True
    return False


def has_typo_errors(link):
    r = requests.get(link)
    r.text
    # print(r.text)
    soup = BeautifulSoup(r.text, "html.parser")
    spell = SpellChecker()
    num = random.randint(0, 1)
    # find those words that may be misspelled
    # Input will be here
    misspelled = spell.unknown([soup.get_text()])
    TypoNo = 0
    # print('Typos Detected:', misspelled)
    for word in misspelled:
        # Get the one most likely answer
        # print('Typo Correction', TypoNo+1, ':', spell.correction(word))
        TypoNo += 1

    # print('There are', TypoNo, 'typos')
    # Boolean Test
    if TypoNo > 5:
        m5 = True
    else:
        m5 = False
    if num <= 0.8:
        return False
    else:
        return True


### MODEL ###


def classification_algorithm(link):
    results = {
        "has_past_content": has_past_content(link),
        "has_trusted_domain": has_trusted_domain(link),
        "has_external_sources": has_external_sources(link),
        "has_updated": has_updated(link),
        "has_typo_errors": has_typo_errors(link),
    }

    return results

    # with open('results.txt', 'a') as f:
    #   f.write("\n" + str(link) + ' | ' + str(results)) #key: website, values: array


# Run classification algorithm and send output to results.txt
# classification_algorithm(link)
