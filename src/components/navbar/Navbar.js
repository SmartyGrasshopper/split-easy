import React, { useState } from 'react';
import "./../navbar/Navbar.css";

const SplitEasyNavbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/"><h1>SplitEasy</h1></a>
            </div>

            <button
                className={`menu-toggle ${isDrawerOpen ? "active" : ""}`}
                onClick={toggleDrawer}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar-links ${isDrawerOpen ? "active" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="add-list">Add List</a></li>
                <li><a href="list-page">Listings</a></li>
            </ul>

             {/* Drawer */}
             <div className={`drawer ${isDrawerOpen ? "active" : ""}`}>
                <a href="/">Home</a>
                <a href="add-list">Add List</a>
                <a href="list-page">Listings</a>
            </div>

            {/* Overlay */}
            <div
                className={`drawer-overlay ${isDrawerOpen ? "active" : ""}`}
                onClick={toggleDrawer}
            ></div>
        </nav>
    );
};

export default SplitEasyNavbar;
