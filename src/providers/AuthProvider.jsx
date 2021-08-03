import React, { Component } from "react";
import apiClient from "../lib/apiClient";

const { Consumer, Provider } = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authProvider => (
            <Comp 
              isLoading={authProvider.isLoading} 
              isLoggedIn={authProvider.isLoggedIn}
              isLoggedOut={authProvider.isLoggedOut}
              error={authProvider.error}
              user={authProvider.user}
              cleanError={authProvider.cleanError}
              logout={authProvider.logout}
              login={authProvider.login} 
              signup={authProvider.signup} 
              {...this.props}
            />
          )}
        </Consumer>
      )
    }
  }
} 

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'loading',
      error: false,
      user: null,
    }
  }

  async componentDidMount() {
    try {
      const user = await apiClient.me()
      this.setState({
        status: 'loggedIn',
        user,
      })
    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
        
      })  
      console.log(e);
    }
  }

  login = async ({ username, password }) => {

    try {
      this.setState({
        status: 'loading',
        user: null,
      })
      const user = await apiClient.login({ username, password })
      this.setState({
        status: 'loggedIn',
        user,
      })

    } catch (e) {
      this.setState({
        status: 'loggedOut',
        error: true,
        user: null,
      })  
    }
  }

  signup = async ({ username, password }) => {
    try {
      this.setState({
        status: 'loading',
        user: null,
      })
      const user = await apiClient.signup({ username, password })
      console.log(user)
      this.setState({
        status: 'loggedIn',
        user,
      })

    } catch (e) {
      this.setState({
        status: 'loggedOut',
        user: null,
      })  
    }
  }

  cleanError = () => {
    this.setState({error:false})
  }

  logout = async () => {
    try {
      await apiClient.logout()
      this.setState({
        status: 'loggedOut',
        user: null,
      })
    } catch (e) {

    }
  }

  render() {
    const { user, status, error } = this.state;
     
    return (
      <Provider value={{ 
          isLoading: status === 'loading',
          isLoggedIn: status === 'loggedIn',
          isLoggedOut: status === 'loggedOut',
          error,
          user,
          cleanError: this.cleanError,
          login: this.login, 
          signup: this.signup,
          logout: this.logout }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AuthProvider;