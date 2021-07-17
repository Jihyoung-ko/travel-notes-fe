import React from "react";
const Header = (props) => {
  const { edit, title } = props;
  return (
    <div>
      {edit && <button>CANCEL</button> }
      <div>{title}</div>
      {edit && <button>SAVE</button> }
    </div>
  )
}

export default Header;