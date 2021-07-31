import React from "react";
import { Link } from "react-router-dom";

import { withAuth } from "../providers/AuthProvider";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 style={{fontSize:"2.5em", fontWeight:"700"}}>Travel Notes</h1>
      <p style={{margin:"40px", fontSize:"1.2em", lineHeight:"1.8"}}>Your private diary to keep personal notes on travels</p>
      <Link to="/login"><button className="save-btn">Log in</button> </Link>
      <Link to="/signup"><button className="save-btn">Sign up</button> </Link>
    </div>
  )
}

export default withAuth(Landing);