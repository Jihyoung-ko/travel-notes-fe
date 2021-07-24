import React from "react";
import { useHistory, Link } from "react-router-dom";


const Header = (props) => {
  const { buttonType, title } = props;
  const history = useHistory();
  
  const onToggle = () => {
    props.onToggle()
  }

  return (
    <div>     
      { buttonType === "edit" && <button onClick={() => history.goBack()}>CANCEL</button> }
      { buttonType === "item" && <button onClick={onToggle} >DELETE</button> }
      { buttonType === "home" && <Link to={'/profile'}><button>Profile</button></Link>  }

      <h2>{title}</h2>
    </div>
  )
}

export default Header;