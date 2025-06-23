import json
import uuid
import secrets

password = ''.join(secrets.choice("0123456789") for _ in range(8))
# Generate a unique ID
key = str(uuid.uuid4())

# input username , email , website
print("config your username , email , website \n and login password \n with your Key ")
username = input("Enter your username: ")
if username == "":
    print("Username cannot be empty")
    exit(1)
email = input("Enter your email: ")
if email == "":
    print("Email cannot be empty")
    exit(1)
if "@" not in email:
    print("Invalid email format")
    exit(1)
if "." not in email.split("@")[1]:
    print("Invalid email format")
    exit(1)
if email.split("@")[1].count(".") < 1:
    print("Invalid email format")
    exit(1)
website = input("Enter your Domain: ")
if website == "":
    print("Domain cannot be empty")
    exit(1)
if website[0] == ".":
    print("Domain cannot start with a dot")
    exit(1)

users = [
    {
        "username": username,
        "password": password,
        "email": email,
        "token": key,
        "domain": website,
    }
]



with open("config.json", "w") as f:
    json.dump(users, f, indent=4)


print("Successfully Configured your account")
print("username : ", username)
print("Login password : ", password)
print("Access Token : ", key)
