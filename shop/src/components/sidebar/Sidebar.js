import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faHeart } from '@fortawesome/free-solid-svg-icons';

function LinkItem({ to, title }) {
  return <Link to={to}>
    <li className="hover:bg-[#df58d3] cursor-pointer block p-5 italic hover:text-white">
      <span><FontAwesomeIcon className="pr-10 white opacity-20" icon={faHeart} /></span>
      {title}
    </li>
  </Link>
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="p-5  flex">
        <span className="navbar-brand scale-y-110 font-extrabold uppercase">Westside <br />Belle<br /> Cakery</span>
        <br />
        <span><FontAwesomeIcon className="p-3 opacity-80 scale-[200%] absolute top-8 right-5 rotation" icon={faGift} /></span>

      </div>

      <div className='flex w-full bg-pink-400 h-2'></div>

      <ul className="menu-items pt-10">
        <LinkItem to="/" title="Home" />
        <LinkItem to="/about" title="About Us" />
        <LinkItem to="/contact" title="Contact" />
        <LinkItem to="/products" title="Products" />
      </ul>
    </div>
  );
};

export default Sidebar;
