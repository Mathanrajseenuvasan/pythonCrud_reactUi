from flask_restplus import fields
from students.middleware.restplus import api

student = api.model('Student', {
    'studentname': fields.String(required=True),
    'cgpa': fields.Integer(required=True),
    'dob': fields.Date(required=True),
    'college_code': fields.Integer(required=True),
    'location': fields.String(required=True),
    'start_dt': fields.DateTime(required=True),
    'end_dt': fields.DateTime(required=True)   
    })
