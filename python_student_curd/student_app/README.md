# Prequal Service

### Requirements

* Python 3.7
* Pipenv

### To run in local:
  
$ `cd to  [project root directory]`

$ `pip install pipenv`

$ `pipenv --python 3.7`

$ `pipenv shell`

$ `pipenv install -e .`

$ `student run`

#### To see routes

$ `student routes`

#### To init tables

$ `student init`

#### Help
$ `student --help`

#### To deactivate environment
$ `exit`

### Microservice Server with swagger will be flashing in http://0.0.0.0:5000/api/v1/

### Quick Run - Make setup
##### To run server

$ `make init`

$ `make run`

### If mysql issue. Add the below two lines in __init__.py file.

Install 'mysql' if not installed.

`$ pip install PyMySQL`

Add these two lines in __init__.py file.
```python
import pymysql
pymysql.install_as_MySQLdb()
```


## DB Migration

$ `CREATE DATABASE delivery_service in MYSQL`

# IN PIPENV SHELL

$ `flask db init`

$ `flask db migrate`

$ `flask db upgrade`

## API ENDPOINTS

### All students
- Path : `/students`
- Method: `GET`
- Response: `200`

### Create student
- Path : `/students`
- Method: `POST`
- Fields: `studentDate, customerId, ItemId, studentQty, amount, walletId, studentStatus`
- Response: `201`

### Details a student
- Path : `/students/{id}`
- Method: `GET`
- Response: `200`

### Update student
- Path : `/students/{id}`
- Method: `PUT`
- Fields: `studentDate, customerId, ItemId, studentQty, amount, walletId, studentStatus`
- Response: `200`

### Delete student
- Path : `/students/{id}`
- Method: `DELETE`
- Response: `204`




