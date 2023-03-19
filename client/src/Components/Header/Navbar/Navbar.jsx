import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import React from "react";
import logon1 from './logon1.png';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [loggedIn, ] = useState(!!localStorage.getItem('token'));
    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        // listen to cart items count changes and update the cartCount state
        const handleCartCountChange = () => {
            const cartItemsCount =2 // get the cart items count from the cart
                setCartCount(cartItemsCount);
        };

        handleCartCountChange(); // initial update
        // subscribe to cart items count changes
        // cart.on('cartCountChange', handleCartCountChange);
        // unsubscribe from cart items count changes on unmount
        return () => {
            // cart.off('cartCountChange', handleCartCountChange);
        };
    }, []);


    return (

        <nav className="navbar">

            <div className="n-left">
                <Link to="/" className="navbar-logo">
                    <img src={logon1} className="logo" alt="logo" />
                </Link>
                <div className="salonname">Salon Divine</div>
            </div>

            <div className={`navbar-menu ${showMenu ? 'is-active' : ''}`}>

                {loggedIn ? (
                    <Link to="/Cart" className="cart">
                        <FaShoppingCart />
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                ) : null}


                <Link to="/Menu" className="navbar-item" onClick={toggleMenu}>
                    Menu
                </Link>
                <Link to="/PackageMenu" className="navbar-item" onClick={toggleMenu}>
                    Packages
                </Link>
                <Link to="/About" className="navbar-item" onClick={toggleMenu}>
                    About
                </Link>
                <Link to="/Contact" className="navbar-item" onClick={toggleMenu}>
                    Contact
                </Link>
            </div>

            <button className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

export default Navbar;
