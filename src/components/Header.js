import React from "react";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { edit, title } = props;
  const history = useHistory();
  
  const onToggle = () => {
    props.onToggle()
  }

  return (
    <div>
      {/* { switch (category) {
        case "edit" :
          <button onClick={() => history.goBack()}>CANCEL</button>;
          break;
        case "home" :
          <button>Profile</button>
          break;
        default:
          <button onClick={onDelete} >DELETE</button>
        }
      }   */}
        
      { edit ? <button onClick={() => history.goBack()}>CANCEL</button> : <button onClick={onToggle} >DELETE</button> }
      <h2>{title}</h2>
      
    </div>
  )
}

export default Header;