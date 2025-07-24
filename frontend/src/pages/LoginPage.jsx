import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

function LoginPage({ onLogin }) {
    const [mode, setMode] = useState("login");

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">
                {mode === "login" ? "Login" : "Register"}
            </h2>
            {mode === "login" ? (
                <LoginForm onSuccess={onLogin} />
            ) : (
                <RegisterForm />
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
