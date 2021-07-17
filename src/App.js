import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import { Route } from 'react-router';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import Home from './pages/Home';
import Album from './pages/Album';
import Article from './pages/Article';
import NewAlbum from './pages/NewAlbum';
import NewArticle from './pages/NewArticle';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      albums: [
    {
        "_id": "60ede76a5ae256196dd9881e",
        "article": [],
        "title": "Project3",
        "user": "60edce4a8fc0840d844d5190",
        "created_at": "2021-07-13T19:20:10.393Z",
        "updated_at": "2021-07-13T19:20:10.393Z",
        "__v": 0
    },
    {
        "_id": "60ee0a477e82391caccd8790",
        "article": [],
        "title": "Project1",
        "startDate": "2021-07-13T00:00:00.000Z",
        "user": "60edce4a8fc0840d844d5190",
        "created_at": "2021-07-13T21:48:55.398Z",
        "updated_at": "2021-07-15T21:10:47.599Z",
        "__v": 0,
        "photo": "photo url",
        "endDate": "2021-08-05T00:00:00.000Z"
    }
]
    }
  }

	render() {
		const { albums } = this.state;
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
					<Route path="/home" render={() => <Home albums={albums} />}/>
					<PrivateRoute path="/album/:id" component={Album} />
					<PrivateRoute path="/article/:id" component={Article} />
					<PrivateRoute path="/new-album" component={NewAlbum} />
					<PrivateRoute path="/new-article" component={NewArticle} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
