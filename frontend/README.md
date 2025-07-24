# 🎨 Vault Frontend – React SPA

This is the frontend of the **Vault – Secret Manager** project, built using React (Vite), React Router, and Bootstrap. It communicates with the Flask backend via RESTful API secured with JWT tokens.

---

## ⚙️ Setup

```bash
cd frontend
npm install
npm run dev
```

Default dev server runs on: [http://localhost:5173](http://localhost:5173)

> Make sure the Flask backend is running on `http://localhost:5000` and has CORS enabled.

---

## 🧯 Features

-   🔑 JWT-based login system
-   📋 User dashboard with full CRUD for secrets
-   💬 Real-time feedback (alerts, loading states)
-   📆 Persistent session via localStorage
-   🛠️ Axios-based communication with secure headers

---

## 🦪 Testing

This app uses [Cypress](https://www.cypress.io/) for end-to-end testing:

```bash
npm run cypress
```

Tests are located in: `cypress/e2e/`

---

## 🔍 Project Structure

```
/frontend
 ├── src/
 │   ├── components/
 │   │   ├── AlertMessage.jsx
 │   │   ├── EditSecretForm.jsx
 │   │   ├── LoginForm.jsx
 │   │   ├── RegisterForm.jsx
 │   │   └── SecretList.jsx
 │   ├── pages/
 │   │   ├── Dashboard.jsx
 │   │   └── LoginPage.jsx
 │   ├── App.jsx
 │   └── main.jsx
 ├── public/
 ├── cypress/
 ├── .env
 ├── ...
 └── index.html
```

---

## 🧠 Environment Variables

Create `.env` file in `frontend/` root (see `.env.example`):

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔗 Related

-   [Backend README](../backend/README.md)
-   [API Reference](../docs/API.md)
-   [Main Project README](../README.md)
