import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const { login, signup } = useAuth();

    // Login State
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    // Register State
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    if (!isOpen) return null;

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(loginData.email, loginData.password);
            toast.success("Login successful");
            onLoginSuccess(); // Close modal and update app state
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false);
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signup(
                registerData.email,
                registerData.password,
                registerData.username,
                registerData.phone
            );
            toast.success("Account created successfully! Please login.");
            setIsLogin(true); // Switch to login view
        } catch (error) {
            toast.error(error.message);
        }
        setLoading(false);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

                {isLogin ? (
                    <form onSubmit={handleLoginSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                        <p className="switch-text">
                            New to Netflix? <span onClick={() => setIsLogin(false)}>Sign up now.</span>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={handleRegisterSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={registerData.username}
                            onChange={handleRegisterChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={registerData.phone}
                            onChange={handleRegisterChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={handleRegisterChange}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                        <p className="switch-text">
                            Already have an account? <span onClick={() => setIsLogin(true)}>Sign in.</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
