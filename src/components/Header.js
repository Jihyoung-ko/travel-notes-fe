import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { edit, title } = props;
  const history = useHistory();
  
  const onDelete = () => {
    props.onDelete()
  }

  return (
    <div>
      {edit ? <button onClick={() => history.goBack()}>CANCEL</button> : <button onClick={onDelete} >DELETE</button> }
      <h2>{title}</h2>
      
    </div>
  )
}

export default Header;