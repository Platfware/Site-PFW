# """
# Using selunium open the browser ad request a website and using bs4 scrap out the website source and save it to templates/index.html
# """

# from selenium import webdriver
# from bs4 import BeautifulSoup

# driver = webdriver.Firefox()
# driver.get("https://marketifythemes.net/html/grax/particle.html")
# #bs4 soruce
# soup = BeautifulSoup(driver.page_source, 'html.parser')
# #save the source to index.html
# with open('templates/about.html', 'w') as f:
#     f.write(str(soup))

# driver.close()
