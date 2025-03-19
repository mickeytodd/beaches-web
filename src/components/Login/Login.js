import React, { useState, useEffect } from "react";
import "./Login.css";
import googleIcon from "../../assets/images/google.png";

const Login = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isRegistering, setIsRegistering] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsRegistering(false);
            setPassword("");
            setConfirmPassword("");
        } else {
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("login-overlay")) {
            onClose();
        }
    };

    return (
        <div className={`login-overlay ${isOpen ? "fade-in" : "fade-out"}`} onClick={handleOverlayClick}>
            <div className="login-content">
                <h2>{isRegistering ? "Sign Up" : "Login"}</h2>
                <form className="login-form__container">
                    {isRegistering && (
                        <>
                            <label>Name:</label>
                            <input type="text" placeholder="Enter your name" required />
                        </>
                    )}

                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder={isRegistering ? "Create a password" : "Enter your password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isRegistering && (
                        <>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </>
                    )}

                    <button type="submit">{isRegistering ? "Sign Up" : "Log In"}</button>
                </form>

                <div className="social-media__container">
                    <p>Or {isRegistering ? "sign up" : "sign in"} with</p>
                    <button className="google-auth">
                        <img src={googleIcon} alt="Google icon" /> {isRegistering ? "Sign up" : "Sign in"} with Google
                    </button>
                </div>

                <p className="auth-switch">
                    {isRegistering ? "Already a user?" : "Need an account?"}
                    <button className="switch-auth" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? "LOG IN" : "SIGN UP"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
