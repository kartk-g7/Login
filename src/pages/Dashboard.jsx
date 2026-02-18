import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Dashboard() {
    const { userData, logout, currentUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleLogout() {
        setError("");
        try {
            await logout();
            navigate("/login");
            toast.success("Logged out successfully");
        } catch {
            setError("Failed to log out");
            toast.error("Failed to log out");
        }
    }

    return (
        <div className="glass-card">
            <h2>Dashboard</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div style={{ textAlign: "left", margin: "20px 0" }}>
                <p>
                    <strong>Username:</strong> {userData?.uname || "Loading..."}
                </p>
                <p>
                    <strong>Email:</strong> {currentUser?.email}
                </p>
                <p>
                    <strong>Phone:</strong> {userData?.phone || "N/A"}
                </p>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}
