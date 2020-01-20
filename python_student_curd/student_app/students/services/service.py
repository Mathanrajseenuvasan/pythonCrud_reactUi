from students.data_access.db_models import Students
from students.data_access.schema_definitions.student_schema import StudentSchema
from students.extensions import db, ma
from students.serializers.student_serializer import student

def get_student(student_id):
    schema = StudentSchema()
    student = Students.query.filter_by(id=student_id).first()
    if student != None:
        response = schema.dump(student)
    else: 
        response = {'message':"student not found"}
    return response

def update_student(student_id, student_data):
    schema = StudentSchema(partial=True)
    student= get_student(student_id)
    if not student.get('message'):
        data = db.session.query(Students).get(student_id)
        data.studentname = student_data.get('studentname') or data.studentname
        data.cgpa = student_data.get('cgpa') or data.cgpa
        data.dob = student_data.get('dob') or data.dob
        data.college_code = student_data.get('college_code') or data.college_code
        data.location = student_data.get('location') or data.location
        db.session.commit()
        student_data['id'] = student['id']
    else:
        student_data = student  
    return student_data

def delete_student(student_id): 
    response= get_student(student_id)
    if not response.get('message'):
        student = Students.query.get_or_404(student_id)
        student.delete()
    return response    

def get_all_student():
    schema = StudentSchema(many=True)
    query = Students.query
    response = schema.dump(query)
    return response

def post_student(data):
    students = Students(studentname=data.get('studentname'), cgpa=data.get('cgpa'), dob=data.get('dob'),\
         college_code=data.get('college_code'), location=data.get('location'), start_dt=data.get('start_dt'), end_dt=data.get('end_dt'))
    response=students.save()
    data['id']=response.id
    return data
    
