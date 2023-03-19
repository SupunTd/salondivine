import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Logbar.css';

const Logbar = () => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    // logout handle
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('User has been Log Out');
        setLoggedIn(false);
        setUser(null);
        window.location = '/';
    };

    return (
        <div className="log">
            <l-left>
                <ul style={{ listStyleType: 'none' }}>
                    <li>info@salondivine.com</li>
                    <li>+9477 679 0679</li>
                </ul>
            </l-left>

            {loggedIn ? (
                <dev className="Logbutton">
                    <l-text2>
                        <Link to="/Profile" className="logbar-item">
                            Welcome, {user.firstName}{user.lastName}!
                        </Link>
                    </l-text2>
                    <button className="loginl" onClick={handleLogout}>
                        Logout
                    </button>
                </dev>
            ) : (
                <div className="Logbutton">
                    <l-text1>Do you have an account?</l-text1>
                    <button className="logbar-item">
                        <Link to="/Login" className="loginl">
                            Log In
                        </Link>
                    </button>
                    <l-text2>
                        <Link to="/Signup" className="logbar-item">
                            Sign Up
                        </Link>
                    </l-text2>
                </div>
            )}
        </div>
    );
};

export default Logbar;
