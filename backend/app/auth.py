from flask import Blueprint, request, jsonify
from app.models import User, db
import jwt, datetime, os

auth = Blueprint("auth", __name__)

@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Username and password required'}), 400

    if User.query.filter_by(username=data['username']).first():
        return jsonify({'message': 'User already exists'}), 409

    user = User(username=data['username'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()

    if not user or not user.check_password(data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401

    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, os.getenv('SECRET_KEY'), algorithm="HS256")

    return jsonify({'token': token}), 200
