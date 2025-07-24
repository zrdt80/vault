def register_user(client, username="john", password="1234"):
    client.post("/register", json={"username": username, "password": password})
    res = client.post("/login", json={"username": username, "password": password})
    return res.get_json()["token"]

def create_secret(client, token, title="Test Secret", value="123456789"):
    res = client.post("/secrets", headers={
        "Authorization": f"Bearer {token}"
    }, json={
        "title": title,
        "value": value
    })
    assert res.status_code == 201

    res = client.get("/secrets", headers={
        "Authorization": f"Bearer {token}"
    })
    secrets = res.get_json()
    return secrets[0]["id"]

def test_access_without_token(client):
    res = client.get("/secrets")
    assert res.status_code == 401
    assert "Token is missing" in res.get_json()["message"]

def test_patch_other_users_secret(client):
    token1 = register_user(client, username="user1")
    secret_id = create_secret(client, token1)

    token2 = register_user(client, username="user2")

    res = client.patch(f"/secrets/{secret_id}", headers={
        "Authorization": f"Bearer {token2}"
    }, json={"title": "HACKED", "value": "nope"})

    assert res.status_code == 404 or res.status_code == 403

def test_delete_other_users_secret(client):
    token1 = register_user(client, username="userA")
    secret_id = create_secret(client, token1)

    token2 = register_user(client, username="userB")

    res = client.delete(f"/secrets/{secret_id}", headers={
        "Authorization": f"Bearer {token2}"
    })

    assert res.status_code == 404 or res.status_code == 403

def test_create_secret_without_auth(client):
    res = client.post("/secrets", json={
        "title": "NoAuth",
        "value": "xyz"
    })

    assert res.status_code == 401
    assert "Token is missing" in res.get_json()["message"]
