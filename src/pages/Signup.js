import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavbarDown from "../components/NavbarDown";
import { withAuth } from "../providers/AuthProvider";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
    username: "",
    password: ""
  };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <Header title="Sign Up" buttonType="item" buttonName="BACK" />

        <form onSubmit={this.handleFormSubmit} style={{marginTop:"200px"}}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" className="save-btn"/>
          <p style={{marginTop:"10px", textAlign:"center"}}>
            Already have account?
            <Link to={"/login"} style={{color:"#a828d2"}}> Login</Link>
          </p>
        </form>
        <NavbarDown />
      </div>
    );
  }
}

export default withAuth(Signup);
