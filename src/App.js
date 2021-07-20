import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import Home from './pages/Home';
import Album from './pages/Album';
import Article from './pages/Article';
import NewAlbum from './pages/NewAlbum';
import NewArticle from './pages/NewArticle';
import Search from './pages/Search';
import EditArticle from './pages/EditArticle';

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
					<PrivateRoute path="/home" component={Home}/>
					<PrivateRoute exact path="/album/:id" component={Album} />
					<PrivateRoute path="/article/:id" component={Article} />
					<PrivateRoute path="/new-album" component={NewAlbum} />
					<PrivateRoute exact path="/album/:id/new-article" component={NewArticle} />
					<PrivateRoute path="/search" component={Search} />
					<PrivateRoute path="/:id/edit" component={EditArticle} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
