from selenium import webdriver


# open up the browser #
driver=webdriver.Chrome(executable_path="Connor/chromedriver.exe")
# set the initial url for the trademark website #
url="https://tmsearch.uspto.gov/bin/gate.exe?f=login&p_lang=english&p_d=trmk"
# navigates to the url #
driver.get(url)
# find the search element that is needed #
element=driver.find_element_by_link_text("Basic Word Mark Search (New User)")
print('found element', element)
# clicks the search element #
element.click()

# item searched #
search="Benny's Pizza"
# find the search box and fill it out with the item above #
searchbox=driver.find_element_by_css_selector("#querytext > input[type=text]")
searchbox.send_keys(search)
# clicked submit for the search #
submitbox=driver.find_element_by_css_selector("body > form > font > table:nth-child(6) > tbody > tr:nth-child(5) > td > input[type=SUBMIT]:nth-child(4)")
submitbox.click()
# downloads .CSV results #
csvbox=driver.find_element_by_css_selector("body > table:nth-child(29) > tbody > tr > td:nth-child(2) > font > input[type=button]")
csvbox.click()
