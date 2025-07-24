import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm({ onSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/login`,
                {
                    username,
                    password,
                }
            );
            localStorage.setItem("token", res.data.token);
            onSuccess();
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="btn btn-primary w-100" type="submit">
                Login
            </button>
        </form>
    );
}

export default LoginForm;
