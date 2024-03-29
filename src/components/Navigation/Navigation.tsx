import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div data-testid='navigation' className='header'>
      <div className='container'>
        <Link to='/'>Addresses</Link>
        <Link to='/contacts/new'>Add Address</Link>
      </div>
    </div>
  );
};

export default Navigation;
