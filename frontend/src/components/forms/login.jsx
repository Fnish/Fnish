// src/components/LoginForm.jsx
import React, { useState } from 'react';
import './login.css'; // Import your CSS file for styles

const login = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =    (e) => {
        e.preventDefault();
        onSubmit({ username, password });
    };

    return (
        <div className="login-container">
            <form className="login" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default login;
