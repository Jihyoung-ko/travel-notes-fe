import React from 'react';
import { Link } from 'react-router-dom';

const NavbarDown = ({ middlebutton, middlebuttonName }) => {
  
  return (
    <div className="navbar-container flex">
      <Link to={'/home'}>HOME </Link>
      <Link to={middlebutton}> {middlebuttonName}</Link>
      <Link to={'/search'}>SEARCH </Link>
    </div>
  )
}
export default NavbarDown;