from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from dotenv import load_dotenv


db = SQLAlchemy()

def create_app():
    load_dotenv()

    app = Flask(__name__)
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL", "sqlite:///vault.db")
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    CORS(app, origins=["http://localhost:5173"])

    db.init_app(app)

    from .auth import auth
    app.register_blueprint(auth)

    from .routes import main
    app.register_blueprint(main)

    return app
