from cryptography.fernet import Fernet
import os


key = os.getenv("FERNET_KEY")
fernet = Fernet(key.encode())

def encrypt_value(value):
    return fernet.encrypt(value.encode()).decode()

def decrypt_value(encrypted_value):
    return fernet.decrypt(encrypted_value.encode()).decode()
