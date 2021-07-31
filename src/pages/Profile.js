import React from "react";
import { withAuth } from "../providers/AuthProvider"
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";

const Profile = (props) => {
  const { user, logout } = props;
  return (
    <div>
      <Header title="Profile"buttonType="item" buttonName="BACK" />
      <div className="contents-container">
        <div className="profile-container">
          <p style={{fontSize:"1.3em", marginBottom:"15px"}}>username: {user.username}</p>
          <button className="save-btn" style={{width:"50%"}} onClick={logout}>Logout</button>
        </div>
      </div>
      <NavbarDown  />

    </div>
  )
}

export default withAuth(Profile);