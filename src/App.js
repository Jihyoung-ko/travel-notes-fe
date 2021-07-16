import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import Home from './pages/Home';
import Album from './pages/Album';

class App extends Component {

	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/home" component={Home} />
					<PrivateRoute path="/album/:id" component={Album} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
