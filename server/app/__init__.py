from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from app.models import db

def create_app():
    app = Flask(__name__)

    # 🔴 Add a secret key for the session
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev_secret_key")
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    CORS(app)

    # Initialize the database
    with app.app_context():
        db.create_all()

    return app
