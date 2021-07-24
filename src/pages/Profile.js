import React from "react";
import { withAuth } from "../providers/AuthProvider"
import NavbarDown from "../components/NavbarDown";

const Profile = (props) => {
  const { user, logout } = props;
  return (
    <div>
      <p>username: {user.username}</p>
			<button onClick={logout}>Logout</button>
      <NavbarDown  />

    </div>
  )
}

export default withAuth(Profile);