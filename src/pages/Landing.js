import React from "react";
import LoginForm from '../components/LoginForm'

import { withAuth } from "../providers/AuthProvider";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 style={{fontSize:"2.5em", fontWeight:"700"}}>Travel Notes</h1>
      <p style={{margin:"40px", fontSize:"1.2em", lineHeight:"1.8"}}>Your private diary to keep personal notes on travels</p>
      <LoginForm />
    </div>
  )
}

export default withAuth(Landing);