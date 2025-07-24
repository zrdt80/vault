import { useState } from "react";
import EditSecretForm from "./EditSecretForm";

function SecretList({ secrets, onDelete, onUpdate }) {
    const [editingId, setEditingId] = useState(null);

    if (secrets.length === 0) return <p>No secrets yet. Add one!</p>;

    return (
        <ul className="list-group">
            {secrets.map((secret) => (
                <li className="list-group-item" key={secret.id}>
                    {editingId === secret.id ? (
                        <EditSecretForm
                            secret={secret}
                            onUpdate={() => {
                                onUpdate();
                                setEditingId(null);
                            }}
                            onCancel={() => setEditingId(null)}
                        />
                    ) : (
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{secret.title}</strong>: {secret.value}
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => setEditingId(secret.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => onDelete(secret.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default SecretList;
