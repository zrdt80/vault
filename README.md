# 🔐 Vault – Encrypted Secrets Manager

A secure RESTful API to manage encrypted user secrets, built with Flask and SQLite.

## ✨ Features

-   Token-based JWT authentication
-   Secure secret storage (Fernet encrypted)
-   User account management (hashed passwords)
-   RESTful CRUD API
-   Environment variables via `.env`

## 🛠 Tech Stack

-   Python, Flask, SQLite
-   JWT (pyjwt), bcrypt, cryptography
-   dotenv, pytest

## 🚀 Setup

```bash
git clone https://github.com/zrdt80/vault.git
cd vault
pip install -r requirements.txt
python run.py
```
