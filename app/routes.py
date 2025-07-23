from flask import Blueprint, request, jsonify
from app.models import Secret, db
from app.crypto import encrypt_value, decrypt_value
from app.utils import token_required

main = Blueprint("main", __name__)

@main.route("/secrets", methods=["POST"])
@token_required
def create_secret(current_user):
    data = request.get_json()
    title = data.get("title")
    value = data.get("value")
    encrypted = encrypt_value(value)
    secret = Secret(user_id=current_user.id, title=title, encrypted_value=encrypted)
    db.session.add(secret)
    db.session.commit()
    return jsonify({"message": "Secret stored"}), 201

@main.route("/secrets", methods=["GET"])
@token_required
def get_secrets(current_user):
    secrets = Secret.query.filter_by(user_id=current_user.id).all()
    return jsonify([
        {
            "id": s.id,
            "title": s.title,
            "value": decrypt_value(s.encrypted_value)
        }
        for s in secrets
    ])

@main.route("/secrets/<int:secret_id>", methods=["PATCH"])
@token_required
def update_secret(current_user, secret_id):
    secret = Secret.query.get(secret_id)

    if not secret or secret.user_id != current_user.id:
        return jsonify({"message": "Secret not found"}), 404

    data = request.get_json()
    if "title" in data:
        secret.title = data["title"]
    if "value" in data:
        secret.encrypted_value = encrypt_value(data["value"])

    db.session.commit()
    return jsonify({"message": "Secret updated"}), 200

@main.route("/secrets/<int:secret_id>", methods=["DELETE"])
@token_required
def delete_secret(current_user, secret_id):
    secret = Secret.query.get(secret_id)

    if not secret or secret.user_id != current_user.id:
        return jsonify({"message": "Secret not found"}), 404

    db.session.delete(secret)
    db.session.commit()
    return jsonify({"message": "Secret deleted"}), 200
