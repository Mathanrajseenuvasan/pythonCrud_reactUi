from flask import jsonify, request
from flask_restplus import Resource
from marshmallow import fields

from students.data_access.db_models import Students
from students.data_access.schema_definitions.student_schema import StudentSchema
from students.extensions import db, ma
from students.middleware.restplus import api
from students.serializers.student_serializer import student
from students.static.response_code import response_format
from students.services.service import (delete_student,
                                                      get_all_student,
                                                      get_student, post_student,
                                                      update_student)

# from student.utils.response_constants import RESPONSE_ERROR_MESSAGE
ns = api.namespace(
    'students',
    description='Operations related to students')

@ns.route('/<int:student_id>')
class studentResource(Resource):
    """Single object resource
    """

    def get(self, student_id):
        response = get_student(student_id)
        return response_format(response)

    @api.expect(student)
    def put(self, student_id):
        response = update_student(student_id, request.json)
        return response_format(response)

    def delete(self, student_id):
        response = delete_student(student_id)
        if response:
            return response_format(response)


@ns.route('/')
class StudentList(Resource):
    """Creation and get_all
    """

    def get(self):
        response = get_all_student()
        return response, 200

    @api.expect(student)
    def post(self):
        response = post_student(request.json)
        return response, 201

    