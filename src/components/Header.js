import React from "react";
import { useHistory, Link } from "react-router-dom";


const Header = (props) => {
  const { buttonType, title } = props;
  const history = useHistory();
  
  const onToggle = () => {
    props.onToggle()
  }

  return (
    <div className="header-container flex">     
      { buttonType === "edit" && <button className="btn-header" onClick={() => history.goBack()}>CANCEL</button> }
      { buttonType === "item" && <button className="btn-header" onClick={onToggle} >DELETE</button> }
      { buttonType === "home" && <Link to={'/profile'}><button className="btn-header">Profile</button></Link>  }

      <h2>{title}</h2>
    </div>
  )
}

export default Header;