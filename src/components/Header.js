import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { edit, title } = props;
  const history = useHistory();
  
  return (
    <div>
      {edit && <button onClick={() => history.goBack()}>CANCEL</button> }
      <div>{title}</div>
      
    </div>
  )
}

export default Header;