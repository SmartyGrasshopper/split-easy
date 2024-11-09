import React from 'react'
import "./../navbar/Navbar.css"

const SplitEasyNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Split Easy</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#add-list">Add List</a></li>
                <li><a href="#listings">Listings</a></li>
            </ul>
        </nav>
    );
};

export default SplitEasyNavbar;