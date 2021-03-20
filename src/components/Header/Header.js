import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Destination</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                    <li>
                        <button><Link className="btn-book" to="/login">Login</Link></button>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Dhaka City Riders</h1>
            </div>
        </div>
    );
};

export default Header;