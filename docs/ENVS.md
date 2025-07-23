# ⚙️ Environment Configuration

Create a `.env` file in your root directory with the following:

```bash
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///vault.db
FERNET_KEY=your_fernet_key_here
```

> 💡 Tip #1: Use `python -c "import secrets; print(secrets.token_hex(64))"` to generate a secret key.

> 💡 Tip #2: Use `python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode()"` to generate a fernet key.
