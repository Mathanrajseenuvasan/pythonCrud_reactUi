import logging.config
import os
import sys
from flask import Flask
from students import api, config
from students.extensions import db, migrate

def create_app(
        config=None,
        environment=os.environ.get(
            'FLASK_ENV',
            'development'),
        cli=True):
    """Application factory, used to create application
    """

    app = Flask('student')
    configure_app(app, environment)
    configure_extensions(app, cli)
    register_blueprints(app)
    return app

def configure_app(app, environment):
    """set configuration for application
    """
    app.config.from_object(config.configuration['development'])
    

def configure_extensions(app, cli):
    """configure flask extensions
    """
    db.init_app(app)

    if cli is True:
        migrate.init_app(app, db)


def register_blueprints(app=None):
    """register all blueprints for application
    """
    app.register_blueprint(api.blueprint)