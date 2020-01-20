import os
import click
from flask.cli import FlaskGroup
from student.app import create_app


def create_prequal(info):
    environment = 'development' if os.environ['FLASK_ENV'] == 'development' else 'production'
    return create_app(cli=True, environment=environment)


@click.group(cls=FlaskGroup, create_app=create_prequal)
def cli():
    """Main entry point"""

@cli.command("init")
def init():
    """Init application, create database tables
    and create a new user named admin with password admin
    """
    from student.extensions import db
    click.echo("create database")
    db.create_all()
    click.echo("done")


if __name__ == "__main__":
    cli()
