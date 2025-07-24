import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={token ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={
                        token ? (
                            <Navigate to="/" />
                        ) : (
                            <LoginPage
                                onLogin={() =>
                                    setToken(localStorage.getItem("token"))
                                }
                            />
                        )
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
