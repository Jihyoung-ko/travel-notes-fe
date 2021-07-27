import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarDown = () => {
  
  return (
    <div className="navbar-container ">
      <Link to={'/home'}><FontAwesomeIcon icon="home" size="lg"/> </Link>
    </div>
  )
}
export default NavbarDown;