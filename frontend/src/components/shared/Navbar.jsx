// src/components/Navbar.jsx
import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Logo</Link> {/* Example link */}
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
