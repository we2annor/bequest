import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <header data-testid='navigation' className='header'>
      <div className='header-logo'>
        <Link to='/'>Address Search</Link>
      </div>
      <div className='container'>
        <nav className='header-nav-bar'>
          <ul>
            <li>
              <NavLink to='/'>Address book</NavLink>
            </li>
            <li>
              <NavLink to='/contacts/new'>Add Address</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
