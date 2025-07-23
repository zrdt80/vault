# 🔐 Vault – Secret Manager

A simple backend service to store, manage, and protect your secrets securely using JWT authentication and encrypted storage.

---

## 🚀 Features

-   ✅ User registration and login with password hashing
-   🔐 JWT-based authentication for protected endpoints
-   🔑 Create, read, update, and delete your own secrets
-   🔒 Each secret is stored encrypted and bound to its owner
-   🛡️ Authorization checks – no access to other users' data
-   📦 Modular Flask application with blueprints and SQLAlchemy
-   🧪 Full test suite with Pytest (positive and negative cases)

---

## 📦 Tech Stack

-   Python 3.10+
-   Flask (modular structure)
-   SQLAlchemy + SQLite (PostgreSQL-ready)
-   JWT (PyJWT)
-   Dotenv (.env config)
-   Pytest (unit testing)

---

## ⚙️ Installation

```bash
git clone https://github.com/zrdt80/vault.git
cd vault
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

---

## 🔧 Setup

Create a `.env` file (see `ENVS.md`):

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

## 🧪 Run Tests

```bash
pytest
```

---

## 🚦 API Reference

See [`API.md`](./API.md) for full documentation of available endpoints.

---

## 🔒 Example Usage

```http
POST /register
POST /login
GET /secrets               # Requires JWT
POST /secrets              # Requires JWT
PATCH /secrets/<id>        # Requires JWT
DELETE /secrets/<id>       # Requires JWT
```

---

## 🗓️ Dev Log

See [`DEVLOG.md`](https://github.com/zrdt80/dev-notes/blob/main/DEVLOG.md) for progress updates and planned features.

---

## 👨‍💻 Author

**Maciej Pawlicki**  
Aspiring Backend & Fullstack Developer  
📫 [maciejpawlicki10@gmail.com](mailto:maciejpawlicki10@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/maciej-pawlicki-207b02222) · [GitHub](https://github.com/zrdt80)

---

## 📜 License

MIT License – feel free to use, modify, and build upon this project.
