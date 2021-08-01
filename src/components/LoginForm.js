import React, { Component } from "react";
import { withAuth } from "../providers/AuthProvider";
import { Link } from 'react-router-dom';

class LoginForm extends Component {
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
    this.props.login({
      username, 
      password
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        
        <div className="contents-container" style={{marginTop:"40px"}}>
          <form onSubmit={this.handleFormSubmit} >
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="*******"
            />
            <button className="save-btn">Log in</button>

            <div style={{textAlign:"center"}}>
              {this.props.error && <div style={{color:"red"}}>There was some problem logging you in. Please try again.</div>}
            <p style={{margin:"10px 0"}}>Don´t have an account?</p>
            <p>Sign up <Link to="/signup"><span style={{color:"#a828d2"}}> Here</span></Link> </p>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
