import React from "react";
import { withAuth } from "../providers/AuthProvider";
import Header from "../components/Header";
import LoginForm from '../components/LoginForm'


const Login = () => {
  return (
      <div>
        <Header title="Log In" />
        <div className="contents-container" style={{marginTop:"180px"}} >
          <h3 style={{textAlign:"center"}}>Please log in<br/> to write new note </h3>
          <LoginForm  />
        </div>      
      </div>
    );
}

export default withAuth(Login);
