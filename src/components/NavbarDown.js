import React from 'react';
import { Link } from 'react-router-dom';

const NavbarDown = ({ middlebutton, middlebuttonName }) => {
  
  return (
    <div>
      <div><Link to={'/home'}>HOME </Link></div>
      <div><Link to={middlebutton}> {middlebuttonName}</Link></div>
      <div><Link to={'/search'}>SEARCH </Link></div>
    </div>
  )
}
export default NavbarDown;