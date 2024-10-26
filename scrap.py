# import requests
# from bs4 import BeautifulSoup
# import os
# import urllib.parse

# def scrape_resources(url):
#     # Send a GET request to the website
#     response = requests.get(url)
    
#     # Parse the HTML content
#     soup = BeautifulSoup(response.content, "html.parser")
    
#     # Extract HTML, CSS, and JavaScript file URLs
#     resource_urls = set()
    
#     # Scraping HTML files
#     resource_urls.add(url)

#     #scrapping images
#     img_tags = soup.find_all("img", src=True)
#     for img in img_tags:
#         src = img.get("src")
#         if src:
#             img_url = urllib.parse.urljoin(url, src)
#             resource_urls.add(img_url)

    
#     # Scraping CSS files
#     css_links = soup.find_all("link", rel="stylesheet")
#     for link in css_links:
#         href = link.get("href")
#         if href:
#             css_url = urllib.parse.urljoin(url, href)
#             resource_urls.add(css_url)
    
#     # Scraping JavaScript files
#     js_scripts = soup.find_all("script", src=True)
#     for script in js_scripts:
#         src = script.get("src")
#         if src:
#             js_url = urllib.parse.urljoin(url, src)
#             resource_urls.add(js_url)
    
#     return soup, resource_urls

# def save_resource(url, filename, directory):
#     # Send a GET request to download the resource file
#     response = requests.get(url)
    
#     # Save the file in the specified directory
#     os.makedirs(directory, exist_ok=True)
#     file_path = os.path.join(directory, filename)
#     with open(file_path, "wb") as file:
#         file.write(response.content)
    
#     # Return the relative path to update in HTML tags
#     return os.path.relpath(file_path, start='.')

# # Example usage
# website_url = "https://marketifythemes.net/html/grax/particle.html"
# soup, resources = scrape_resources(website_url)

# # Save HTML file in 'templates' directory and update paths in HTML tags
# templates_dir = 'templates'
# html_filename = "index.html"
# html_relative_path = save_resource(website_url, html_filename, templates_dir)

# # Update HTML tags for CSS and JavaScript files
# for resource_url in resources:
#     if resource_url != website_url:
#         resource_filename = resource_url.split("/")[-1]
#         resource_relative_path = save_resource(resource_url, resource_filename, 'static')
        
#         # Update HTML tags with the correct path
#         # if resource_url.endswith(".css"):
#         #     tag = soup.find("link", href=resource_url)
#         #     if tag:
#         #         tag["href"] = resource_relative_path
#         # elif resource_url.endswith(".js"):
#         #     tag = soup.find("script", src=resource_url)
#         #     if tag:
#         #         tag["src"] = resource_relative_path

# # # Write the updated HTML back to the templates directory
# # html_file_path = os.path.join(templates_dir, html_filename)
# # with open(html_file_path, "w") as file:
# #     file.write(str(soup))
