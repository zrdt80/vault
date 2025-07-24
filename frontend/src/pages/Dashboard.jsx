import { useEffect, useState } from "react";
import axios from "axios";
import SecretList from "../components/SecretList";
import AlertMessage from "../components/AlertMessage";

function Dashboard() {
    const [secrets, setSecrets] = useState([]);
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState(null);

    const token = localStorage.getItem("token");

    const fetchSecrets = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/secrets`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setSecrets(res.data);
            setAlert({ type: "success", message: "Secrets fetched!" });
        } catch (err) {
            setAlert({ type: "danger", message: "Failed to fetch secrets" });
        } finally {
            setLoading(false);
        }
    };

    const addSecret = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/secrets`,
                { title, value },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTitle("");
            setValue("");
            fetchSecrets();
            setAlert({ type: "success", message: "Secret added!" });
        } catch {
            setAlert({ type: "danger", message: "Something went wrong" });
        }
    };

    const deleteSecret = async (id) => {
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/secrets/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setSecrets(secrets.filter((s) => s.id !== id));
            setAlert({ type: "success", message: "Secret deleted!" });
        } catch {
            setAlert({ type: "danger", message: "Failed to delete secret" });
        }
    };

    useEffect(() => {
        fetchSecrets();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">🔐 Vault – Your Secrets</h2>
            <button
                className="btn btn-outline-secondary float-end mb-3"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }}
            >
                Logout
            </button>

            {alert && (
                <AlertMessage
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

            <form onSubmit={addSecret} className="mb-4">
                <div className="row g-2">
                    <div className="col-md-5">
                        <input
                            className="form-control"
                            placeholder="Secret title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-5">
                        <input
                            className="form-control"
                            placeholder="Secret value"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary w-100" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </form>

            {loading ? (
                <div className="text-center my-5">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    ></div>
                    <p className="mt-2">Loading secrets...</p>
                </div>
            ) : (
                <SecretList
                    secrets={secrets}
                    onDelete={deleteSecret}
                    onUpdate={fetchSecrets}
                />
            )}
        </div>
    );
}

export default Dashboard;
