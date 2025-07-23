# 🗺️ Route Summary – Vault

| Method | Path          | Description             | Auth Required |
| ------ | ------------- | ----------------------- | ------------- |
| POST   | /register     | Create new user         | ❌ No         |
| POST   | /login        | Get JWT token           | ❌ No         |
| GET    | /secrets      | List all user's secrets | ✅ Yes        |
| POST   | /secrets      | Add new secret          | ✅ Yes        |
| PATCH  | /secrets/<id> | Update specific secret  | ✅ Yes        |
| DELETE | /secrets/<id> | Delete specific secret  | ✅ Yes        |
