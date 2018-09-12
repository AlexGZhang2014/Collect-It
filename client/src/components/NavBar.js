import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/posts" exact>Posts</NavLink></li>
        <li><NavLink to="/collections" exact>Collections</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;
