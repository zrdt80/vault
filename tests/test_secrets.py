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
    return secrets[0]["id"], secrets

def test_create_secret_returns_correct_data(client):
    token = register_user(client)
    _, secrets = create_secret(client, token, title="Test API Key", value="123456789")

    assert isinstance(secrets, list)
    assert secrets[0]["title"] == "Test API Key"

def test_update_secret(client):
    token = register_user(client)
    secret_id, _ = create_secret(client, token, title="Original Title", value="original-value")

    res = client.patch(f"/secrets/{secret_id}", headers={
        "Authorization": f"Bearer {token}"
    }, json={
        "title": "Updated Title",
        "value": "updated-value"
    })
    assert res.status_code == 200
    assert res.get_json()["message"] == "Secret updated"

    res = client.get("/secrets", headers={
        "Authorization": f"Bearer {token}"
    })
    updated = res.get_json()
    assert updated[0]["title"] == "Updated Title"

def test_delete_secret(client):
    token = register_user(client)
    secret_id, _ = create_secret(client, token)

    res = client.delete(f"/secrets/{secret_id}", headers={
        "Authorization": f"Bearer {token}"
    })
    assert res.status_code == 200
    assert res.get_json()["message"] == "Secret deleted"

    res = client.get("/secrets", headers={
        "Authorization": f"Bearer {token}"
    })
    assert res.status_code == 200
    assert len(res.get_json()) == 0
