import { useState } from "react";
import axios from "axios";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
                username,
                password,
            });
            setRegistered(true);
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed");
        }
    };

    return registered ? (
        <div className="alert alert-success">
            Registration successful! You can now log in.
        </div>
    ) : (
        <form onSubmit={handleRegister}>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="btn btn-success w-100" type="submit">
                Register
            </button>
        </form>
    );
}

export default RegisterForm;
