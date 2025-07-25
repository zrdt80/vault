# 🔐 Vault – Secret Manager

Vault is a secure web application that allows users to store and manage secrets such as API keys, passwords, and notes.\
It’s built with a Flask backend, React frontend, and full JWT authentication flow.

---

## 🔗 Live preview

You can check out project at link:
[https://vault-alpha-hazel.vercel.app/](https://vault-alpha-hazel.vercel.app/)

---

## 🧹 Monorepo Structure

```
vault/
├── backend/       ← Flask REST API (modular, with JWT + SQLAlchemy)
├── frontend/      ← React SPA (Vite + React Router + Bootstrap)
├── docs/          ← API docs, ENV setup, dev logs
└── README.md      ← This file
```

---

## 🚀 Features

-   🔐 Secure authentication using JWT
-   📋 Personal dashboard for managing secrets (CRUD)
-   🔒 Secrets encrypted and tied to user identity
-   🧠 React frontend with persistent session
-   🧪 Full backend test coverage (positive & negative cases)
-   📦 Modular structure ready for scaling

---

## 📆 Tech Stack

-   **Backend**: Python, Flask, SQLAlchemy, PyJWT
-   **Frontend**: React, Vite, Bootstrap, Axios
-   **Database**: SQLite (PostgreSQL-ready)
-   **Testing**: Pytest (backend), Cypress (frontend)

---

## ⚙️ Getting Started

### 🔧 Clone & Install

```bash
git clone https://github.com/zrdt80/vault.git
cd vault
```

### 🐍 Setup Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
flask shell                    # then in shell:
>>> from app import db
>>> db.create_all()
```

### 📥 Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📚 Documentation

| File                                               | Description                            |
| -------------------------------------------------- | -------------------------------------- |
| [`docs/API.md`](docs/API.md)                       | API Reference – endpoints, usage, auth |
| [`docs/ENVS.md`](docs/ENVS.md)                     | Environment variables (.env setup)     |
| [`docs/ROUTES.md`](docs/ROUTES.md)                 | Frontend + backend routing overview    |
| [`dev-notes`](https://github.com/zrdt80/dev-notes) | Dev logs, snippets, roadmap            |

---

## 🧪 Testing

### Backend

```bash
cd backend
pytest
```

### Frontend (Cypress)

```bash
cd frontend
npm run cypress
```

---

## 📦 Deployment

-   Backend: ~~`Flask + Gunicorn + Nginx`~~
-   Frontend: ~~`React build + Nginx static hosting`~~

> Deployment coming soon!

---

## 👨‍💻 Author

**Maciej Pawlicki** – aspiring backend & fullstack developer\
📧 [maciejpawlicki10@gmail.com](mailto:maciejpawlicki10@gmail.com)\
🔗 [LinkedIn](https://www.linkedin.com/in/maciej-pawlicki-207b02222) · [GitHub](https://github.com/zrdt80)

---

## 📜 License

MIT License – feel free to use, modify, and build upon this project.
