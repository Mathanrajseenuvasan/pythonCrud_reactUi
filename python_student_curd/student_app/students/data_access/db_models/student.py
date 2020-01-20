from students.data_access.db_models.base import Base
from students.extensions import db
import datetime
from datetime import date


class Students(db.Model, Base):
    """Basic Product model
    """
    id = db.Column(db.Integer, primary_key=True)
    studentname = db.Column(db.String(30))
    cgpa = db.Column(db.Integer())
    dob = db.Column(db.Date())
    college_code = db.Column(db.Integer())
    location = db.Column(db.String(30)) 
    start_dt = db.Column(db.DateTime())
    end_dt = db.Column(db.DateTime())

    @db.validates("start_dt", "end_dt")
    def validate_end_date(self, key, value):
        print("=========", key, value)
        if key == "start_dt":
            self._start_changed = True
        if key == "end_dt" and self._start_changed and self.start_dt > value:
            self._start_changed = False
            raise ValueError("Start date can not be after end date.")
        return value

    def __init__(self, **kwargs):
        super(Students, self).__init__(**kwargs)

    def __repr__(self):
        return "<Students %s>" % self.id
