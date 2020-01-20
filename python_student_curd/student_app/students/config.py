import os

class Config:
    SECRET_KEY = "ksr"
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    """Default configuration
    Use env var to override
    """
    DEBUG = True
    DB_HOST = os.environ.get('DB_HOST', '127.0.0.1:3306')
    DB_USER = os.environ.get('DB_USER')
    DB_PASSWORD = os.environ.get('DB_PASSWORD')
    DB_NAME = os.environ.get('DB_NAME')
    SQLALCHEMY_DATABASE_URI = "mysql://{}:{}@{}/{}".format(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)
    # SQLALCHEMY_DATABASE_URI = "mysql://root:secret@10.8.1.68:3306/prequal"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    RESTPLUS_VALIDATE = True
    RESTPLUS_MASK_SWAGGER = True

class TestingConfig(Config):
    TESTING = True
    DB_HOST = os.environ.get('DB_HOST', '127.0.0.1:3306')
    DB_USER = os.environ.get('DB_USER', 'root')
    DB_PASSWORD = os.environ.get('DB_PASSWORD', 'root')
    DB_NAME = os.environ.get('DB_NAME', 'student_service')
    SQLALCHEMY_DATABASE_URI = "mysql://{}:{}@{}/{}".format(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)
    
class ProductionConfig(Config):
    DEBUG = False
    DB_HOST = os.environ.get('DB_HOST', '127.0.0.1:3306')
    DB_USER = os.environ.get('DB_USER', 'root')
    DB_PASSWORD = os.environ.get('DB_PASSWORD', 'root')
    DB_NAME = os.environ.get('DB_NAME', 'student_service')
    SQLALCHEMY_DATABASE_URI = "mysql://{}:{}@{}/{}".format(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME)

configuration = {
'development': DevelopmentConfig,
'testing': TestingConfig,
'production': ProductionConfig,
'default': DevelopmentConfig
}