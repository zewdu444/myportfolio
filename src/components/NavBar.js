import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="">
          <a href="/" className="brand-logo left logospace">Portfolio</a>
          <ul className="">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/showcase">Showcase</NavLink></li>
            <li><NavLink to="/showcase">ContactMe</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
