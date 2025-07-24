# ⚙️ ENVS.md – Environment Configuration

Create a `.env` file in the root of the backend directory with the following keys:

```env
# Flask App
FLASK_APP=run.py
FLASK_ENV=development

# Flask JWT
SECRET_KEY=supersecretkey

# SQLAlchemy DB
DATABASE_URL=sqlite:///vault.db

# Encryption (Fernet)
FERNET_KEY=GENERATED_FERNET_KEY
```

## 🔐 How to generate FERNET_KEY

In Python shell:

```python
from cryptography.fernet import Fernet
Fernet.generate_key().decode()
```

Then paste the key into `.env`:

```env
FERNET_KEY=VJxX...yourkey...=
```
