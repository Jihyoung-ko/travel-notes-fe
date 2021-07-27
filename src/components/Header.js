import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {
  const { buttonType, buttonName, title } = props;
  const history = useHistory();
  

  const onSearch = (e) => {
    props.onSearch(e)
  }

  return (
    <div className="header-container flex">     
     
      { buttonType === "home" ? <Link to={'/profile'}><button className="header-btn"><FontAwesomeIcon icon={['far', 'user-circle']} size="2x" /></button></Link> : <button className="header-btn" onClick={() => history.goBack()}>{buttonName}</button> }

      <h2>{title}</h2>
      { buttonType !== "search" ? <Link to={'/search'}><button className="header-btn" style={{fontSize:"1.1em"}} ><FontAwesomeIcon icon="search" size="lg"/></button> </Link> : <input className="search-input" type="search"  placeholder="Search..." onChange={onSearch}/> }
    </div>
  )
}

export default Header;