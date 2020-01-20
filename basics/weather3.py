import requests
from pprint import pprint

#city = input('Enter your city : ')

url = 'https://reqres.in/api/users?page=2'

res = requests.get(url)

data = res.json()

print (res)
#print (data)

email = data["email"]
firstname = data['first_name']

lastname = data['last_name']

avatar = data['avatar']

print('E-mail : {}'.format(email))
print('First Name : {}'.format(firstname))
print('Last Name : {}'.format(lastname))
print('Avatar : {}'.format(avatar))

