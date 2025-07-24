# 📘 API.md – Vault Secret Manager API Reference

All endpoints require a valid Bearer token unless specified.

---

## Base URL

```
http://localhost:5000
```

---

## 🧾 Authentication

All endpoints except `/register` and `/login` require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your_token_here>
```

---

## 📨 POST /register

Create a new user account.

**Request Body:**

```json
{
    "username": "john",
    "password": "1234"
}
```

**Response:**

-   `201 Created`

```json
{ "message": "User registered" }
```

---

## 📨 POST /login

Login and receive a JWT access token.

**Request Body:**

```json
{
    "username": "john",
    "password": "1234"
}
```

**Response:**

-   `200 OK`

```json
{ "token": "<JWT_TOKEN>" }
```

---

## 📥 GET /secrets

Returns all secrets for the authenticated user.

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Response:**

```json
[
    {
        "id": 1,
        "title": "API Key",
        "value": "123abc",
        "created_at": "2025-07-24T10:00:00"
    }
]
```

---

## 📤 POST /secrets

Create a new secret.

**Request Body:**

```json
{
    "title": "Github Key",
    "value": "ghp_abc123"
}
```

**Response:**

-   `201 Created`

```json
{ "message": "Secret created" }
```

---

## 🛠 PATCH /secrets/

Update an existing secret by ID.

**Request Body:**

```json
{
    "title": "Updated Title",
    "value": "updated-value"
}
```

**Response:**

-   `200 OK`

```json
{ "message": "Secret updated" }
```

---

## ❌ DELETE /secrets/

Delete a secret by ID.

**Response:**

-   `200 OK`

```json
{ "message": "Secret deleted" }
```
