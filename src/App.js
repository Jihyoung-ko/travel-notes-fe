import React, { Component } from 'react';
import './App.css';
import { Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faHome, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

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
import EditAlbum from './pages/EditAlbum';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

library.add(far, faSearch, faPlus, faHome, faTimes);

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/home" component={Home}/>
					<PrivateRoute exact path="/album/:albumId/article/:articleId/edit" component={EditArticle} />
					<PrivateRoute path="/album/:albumId/article/:articleId" component={Article} />
					<PrivateRoute exact path="/album/:id/new-article" component={NewArticle} />
					<PrivateRoute exact path="/album/:id/edit" component={EditAlbum} />
					<PrivateRoute exact path="/album/:id" component={Album} />
					<PrivateRoute path="/new-album" component={NewAlbum} />
					<PrivateRoute path="/search" component={Search} />
					<PrivateRoute path="/profile" component={Profile} />
					<AnonRoute exact path="/" component={Landing} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
