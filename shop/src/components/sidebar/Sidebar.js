import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-items">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/sale">Sale</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
