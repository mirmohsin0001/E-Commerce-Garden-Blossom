import React from 'react';
import { Link } from 'react-router'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartBar, faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (

        <nav className="navbar">

            <div className="navbar-left">
                <Link to="/" className="logo">ShopNow</Link>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </div>

            <div className="navbar-right">
                <a href="/Cart" className="cart-icon">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span className="cart-count">0</span>
                </a>
                <a href="/MyAccount" className="user-icon">
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </div>

            <div className="hamburger-menu">
                <FontAwesomeIcon icon={faHamburger}/>
            </div>

        </nav>
    );
};

export default Navbar;