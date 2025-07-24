import { useState } from "react";
import axios from "axios";

function EditSecretForm({ secret, onUpdate, onCancel }) {
    const [title, setTitle] = useState(secret.title);
    const [value, setValue] = useState(secret.value);
    const [alert, setAlert] = useState(null);
    const token = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(
                `${import.meta.env.VITE_API_URL}/secrets/${secret.id}`,
                { title, value },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onUpdate();
            setAlert({
                type: "success",
                message: "Secret updated successfully!",
            });
        } catch (err) {
            setAlert({
                type: "danger",
                message: "Failed to update secret. Please try again.",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-3 p-3 border rounded bg-light"
        >
            <div className="mb-2">
                <input
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <input
                    className="form-control"
                    placeholder="Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary btn-sm">
                    Save
                </button>
                <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditSecretForm;
