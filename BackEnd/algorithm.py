import requests
import selenium
import time
import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver import ChromeOptions
from selenium.common.exceptions import NoSuchElementException
from oauth2client.service_account import ServiceAccountCredentials


# Take input from front-end
link = "https://www.health.nsw.gov.au/"
options = ChromeOptions()
options.add_argument("--headless")

# Web-scraper to collect data
driver = webdriver.Chrome(ChromeDriverManager().install(), options = options)
driver.get(link)

### METRICS ###

## 1.  Lets you search past content: Boolean - functionality to search archives with key words

def has_past_content(link):
  return None

## 2. URL ends in trusted domains (e.g .edu, .org, .gov and .net) or Is a news/trusted organisation

def is_trusted_domain(link):
  trusted_domains = ['.edu', '.org', '.gov']
  for i in range(0, len(trusted_domains)):
    if trusted_domains[i] in link:
      print("Trusted.")

### MODEL
is_trusted_domain(link)

