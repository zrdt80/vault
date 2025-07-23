# 📚 API Reference – Vault

All endpoints require a valid Bearer token unless specified.

---

## 🔐 Auth

### `POST /register`
Registers a new user.

**Body:**
```json
{ "username": "user", "password": "1234" }
```

### `POST /login`
Returns JWT token.

**Body:**
```json
{ "username": "user", "password": "1234" }
```

---

## 🔑 Secrets

### `GET /secrets`
Get all secrets for the authenticated user.

**Headers:**  
`Authorization: Bearer <token>`

---

### `POST /secrets`
Create a new secret.

**Body:**
```json
{ "title": "My Secret", "value": "xyz" }
```

---

### `PATCH /secrets/<id>`
Update a secret (if owned).

**Body:**
```json
{ "title": "New Title", "value": "newvalue" }
```

---

### `DELETE /secrets/<id>`
Delete a secret (if owned).
