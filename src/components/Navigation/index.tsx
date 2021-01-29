import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>Contacts</Link>
        <Link to='/contacts/new'>Add Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
