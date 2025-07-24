# 🛣️ ROUTES.md – Vault Routing Overview

This document outlines the **routing structure** of the Vault application – covering both backend (Flask REST API) and frontend (React SPA).

---

## ⚙️ Backend Routes (Flask API)

All API endpoints are prefixed with `http://localhost:5000/`

| Method | Endpoint        | Auth Required | Description                          |
| ------ | --------------- | ------------- | ------------------------------------ |
| POST   | `/register`     | No            | Register a new user                  |
| POST   | `/login`        | No            | Authenticate and get JWT token       |
| GET    | `/secrets`      | Yes (JWT)     | Get list of secrets for current user |
| POST   | `/secrets`      | Yes (JWT)     | Create a new secret                  |
| PATCH  | `/secrets/<id>` | Yes (JWT)     | Update existing secret               |
| DELETE | `/secrets/<id>` | Yes (JWT)     | Delete a secret                      |

---

## 🧠 Frontend Routes (React)

All routes are handled by React Router inside the SPA. The app runs on `http://localhost:5173/`

| Path     | Component   | Access        | Purpose                    |
| -------- | ----------- | ------------- | -------------------------- |
| `/`      | `Dashboard` | Private (JWT) | Main view, list of secrets |
| `/login` | `LoginPage` | Public        | Login and register forms   |

---

## 🔐 Auth & Headers

All authenticated requests to backend should include:

```http
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

---

## 🔁 Routing Notes

-   Frontend handles routing entirely on the client-side via React Router.
-   Backend validates JWT on all `/secrets/*` endpoints.
-   On failed auth (invalid/missing token), backend returns `401 Unauthorized`.

---

## ✅ Related Docs

-   [API.md](./API.md) – full REST API reference
-   [ENVS.md](./ENVS.md) – environment variables setup
-   [README.md](../README.md) – main project overview

---

For questions, contact [Maciej Pawlicki](mailto:maciejpawlicki10@gmail.com).
