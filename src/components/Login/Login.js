import React, { useState, useEffect } from "react";
import "./Login.css";
import googleIcon from "../../assets/images/google.png";

const Login = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [isRegistering, setIsRegistering] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className={`login-overlay ${isOpen ? "fade-in" : "fade-out"}`}>
            <div className="login-content">
                {isRegistering ? (
                    <>
                        <h2>Sign Up</h2>
                        <form>
                            <label>Full Name:</label>
                            <input type="text" placeholder="Enter your name" required />

                            <label>Email:</label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Password:</label>
                            <input type="password" placeholder="Create a password" required />

                            <button type="submit">Sign Up</button>
                        </form>

                        <p>Already have an account?</p>
                        <button className="switch-auth" onClick={() => setIsRegistering(false)}>Back to Login</button>

                        <p>Or sign up with</p>
                        <button className="google-auth">
                            <img src={googleIcon} alt="Google icon" /> Sign up with Google
                        </button>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <form>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter your email" required />

                            <label>Password:</label>
                            <input type="password" placeholder="Enter your password" required />

                            <button type="submit">Log In</button>
                        </form>

                        <p>Don't have an account?</p>
                        <button className="switch-auth" onClick={() => setIsRegistering(true)}>Sign Up</button>

                        <p>Or sign in with</p>
                        <button className="google-auth">
                            <img src={googleIcon} alt="Google icon" /> Sign in with Google
                        </button>
                    </>
                )}
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Login;
