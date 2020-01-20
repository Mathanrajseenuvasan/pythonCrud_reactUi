from marshmallow import fields

from students.data_access.db_models import Students
from students.extensions import ma


class StudentSchema(ma.ModelSchema):

    student = fields.Nested('StudentSchema', only=['id', 'studentname', 'cgpa', 'dob', 'college_code', 'location'])

    class Meta:
        model = Students
