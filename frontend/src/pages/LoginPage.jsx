import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AlertMessage from "../components/AlertMessage";
import { useState } from "react";

function LoginPage({ onLogin }) {
    const [mode, setMode] = useState("login");
    const [alert, setAlert] = useState(null);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">
                {mode === "login" ? "Login" : "Register"}
            </h2>

            {alert && (
                <AlertMessage
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

            {mode === "login" ? (
                <LoginForm onSuccess={onLogin} setAlert={setAlert} />
            ) : (
                <RegisterForm setAlert={setAlert} />
            )}

            <div className="text-center mt-3">
                <button
                    className="btn btn-link"
                    onClick={() =>
                        setMode(mode === "login" ? "register" : "login")
                    }
                >
                    {mode === "login"
                        ? "Need an account? Register"
                        : "Already registered? Login"}
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
