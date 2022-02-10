import requests
import random
import selenium
import time
import pandas as pd
import json
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
  num = random.randint(0, 1)
  if num <= 0.5:
    return True
  else:
    return False

## 2. URL ends in trusted domains (e.g .edu, .org, .gov and .net) or Is a news/trusted organisation

def has_trusted_domain(link):
  trusted_domains = ['.edu', '.org', '.gov']
  for i in range(0, len(trusted_domains)):
    if trusted_domains[i] in link:
      print("Trusted.")
      return True
  return False

def has_external_sources(link):
  num = random.randint(0, 1)
  if num <= 0.5:
    return True
  else:
    return False

def has_updated(link):
  num = random.randint(0, 1)
  if num <= 0.5:
    return True
  else:
    return False

def has_typo_errors(link):
  #API not returning correct values
  num = random.randint(0, 1)
  if num <= 0.5:
    return True
  else:
    return False

### MODEL ###

def classification_algorithm(link):
  results = [False, False, False, False, False]
  
  # Run metric functions
  results[0] = has_past_content(link) #Able to search past content
  results[1] = has_trusted_domain(link) #Trusted domain
  results[2] = has_external_sources(link)
  results[3] = has_updated(link)
  results[4] = has_typo_errors(link)
  
  with open('results.txt', 'a') as f:
    f.write("\n" + str(link) + ' | ' + str(results)) #key: website, values: array

# Run classification algorithm and send output to results.txt
classification_algorithm(link)
