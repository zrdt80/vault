# 🔐 Vault Backend – Flask API

This is the backend of the **Vault – Secret Manager** project, built with Flask and structured using Blueprints. It provides a secure RESTful API for managing secrets with authentication and encryption.

---

## ⚙️ Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

---

## 🔢 Environment Variables

Create a `.env` file in the project root (see `ENVS.md`):

```env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///vault.db
FERNET_KEY=your_fernet_key_here
```

Then initialize the database:

```bash
flask shell
>>> from app import db
>>> db.create_all()
>>> exit()
```

---

## 🧪 Features

-   🔑 Secure JWT-based authentication (via Flask-JWT-Extended)
-   🔏 Password hashing with Werkzeug
-   📂 SQLAlchemy models and migrations
-   🛡️ Data encryption with Fernet (cryptography)
-   🤫 CORS support for frontend interaction
-   🔢 Modular design using Blueprints
-   🧪 Fully tested using Pytest (positive + negative cases)

---

## 📊 API Endpoints

| Method | Endpoint  | Description                   |
| ------ | --------- | ----------------------------- |
| POST   | /register | Register new user             |
| POST   | /login    | Authenticate and return token |
| GET    | /secrets  | List user's secrets (auth)    |
| POST   | /secrets  | Create new secret             |
| PATCH  | /secrets/ | Update secret by ID           |
| DELETE | /secrets/ | Delete secret by ID           |

> See [API.md](../docs/API.md) for full reference.

---

## 🚧 Project Structure

```
/backend
 ├── app/
 │   ├── __init__.py
 │   ├── auth.py
 │   ├── crypto.py
 │   ├── models.py
 │   ├── routespy
 │   └── utils.py
 ├── tests/
 ├── .env.example
 ├── run.py
 └── requirements.txt
```

---

## 🧰 Testing

Unit tests are written using Pytest:

```bash
pytest
```

Coverage includes:

-   Auth flow (register, login)
-   CRUD operations on secrets
-   Error cases and auth checks

---

## 🔗 Related

-   [Frontend README](../frontend/README.md)
-   [Main Project README](../README.md)
