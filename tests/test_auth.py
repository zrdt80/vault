def test_register_and_login(client):
    res = client.post("/register", json={
        "username": "testuser",
        "password": "testpass"
    })
    assert res.status_code == 201

    res = client.post("/login", json={
        "username": "testuser",
        "password": "testpass"
    })
    assert res.status_code == 200
    data = res.get_json()
    assert "token" in data
