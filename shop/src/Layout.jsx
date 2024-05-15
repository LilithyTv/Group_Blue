import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './Layout.css'; 

export default function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header>
                <nav className="header-nav" aria-label="Main navigation">
                    <ul className="nav-links">
                        <li>
                            <Link to="/shoppingcart" aria-label="View shopping cart">Shopping Cart</Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            <div className="main-content">
            <Header>
                <nav className="header-nav" aria-label="Main navigation">
                    <ul className="nav-links">
                        <li>
                            <Link to="/shoppingcart" aria-label="View shopping cart">Shopping Cart</Link>
                        </li>
                    </ul>
                </nav>
            </Header>
                <Sidebar />
                <main className="content-area">
                    {children}
                </main>
            </div>
        </div>
    );
}

 /*<li>
                            <Link to="/profile" aria-label="View profile">Profile</Link>
                        </li> */