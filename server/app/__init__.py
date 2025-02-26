import os
from flask import Flask, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    # 🔴 Ajouter une clé secrète pour activer les sessions
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev_secret_key")

    # Configuration de la base de données
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    CORS(app)

    # Enregistrer les routes
    from app.routes import bp as routes_blueprint
    app.register_blueprint(routes_blueprint)

    return app