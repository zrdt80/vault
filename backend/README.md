# 🔐 Vault – Secret Manager

Vault is a web application for managing private secrets (passwords, API keys, notes) with JWT authentication, a React frontend, and a Flask backend.

---

## 🚀 Features

-   ✅ User registration and login with password hashing
-   🔐 JWT-based authentication for protected endpoints
-   🔑 Create, read, update, and delete your own secrets
-   🔒 Secrets are encrypted and tied to the user account
-   🧾 Full RESTful API with role-based authorization
-   🛡️ Protection from accessing other users' data
-   🧭 Persistent session handling via localStorage
-   💬 UI alerts for success/error states and loading indicators
-   📋 Responsive frontend with modern UI (React + Bootstrap)
-   🧪 Full test suite with Pytest (unit + negative tests)
-   🧪 End-to-End tests with Cypress (frontend flow)

---

## 📦 Tech Stack

### Backend:

-   Python 3.10+
-   Flask (modular structure)
-   SQLAlchemy + SQLite (PostgreSQL-ready)
-   Flask-JWT-Extended
-   Flask-CORS
-   Dotenv (.env config)
-   Pytest (unit testing)

### Frontend:

-   React + Vite
-   React Router
-   Bootstrap 5
-   Axios
-   Cypress (E2E tests)

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

### POST `/register`

Registers a new user

### POST `/login`

Returns JWT token

### GET `/secrets`

Returns list of secrets (auth required)

### POST `/secrets`

Creates a new secret

### PATCH `/secrets/<id>`

Updates a specific secret

### DELETE `/secrets/<id>`

Deletes a secret

Full endpoint list: [`API.md`](./API.md)

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

## 🌐 Frontend Structure

```
/src
 ├── components/
 │   ├── LoginForm.jsx
 │   ├── RegisterForm.jsx
 │   ├── SecretForm.jsx
 │   ├── SecretList.jsx
 │   └── EditSecretForm.jsx

 ├── pages/
 │   ├── LoginPage.jsx
 │   └── Dashboard.jsx

 ├── App.jsx
 └── main.jsx
```

---

## 🗓️ Dev Log

See [`DEVLOG.md`](https://github.com/zrdt80/dev-notes/blob/main/DEVLOG.md) for daily progress, notes, and goals.

---

## ✅ TODO

-   [x] JWT login flow
-   [x] CRUD operations
-   [x] Backend unit tests
-   [x] Frontend E2E tests
-   [x] Alerts and loading states
-   [ ] Password reset
-   [ ] Secret sharing
-   [ ] Filtering and tagging

---

## 📫 Author

**Maciej Pawlicki**\
Aspiring Backend & Fullstack Developer\
📫 [maciejpawlicki10@gmail.com](mailto:maciejpawlicki10@gmail.com)\
🔗 [LinkedIn](https://www.linkedin.com/in/maciej-pawlicki-207b02222) · [GitHub](https://github.com/zrdt80)

---

## 📜 License

MIT License – feel free to use, modify, and build upon this project.
