// import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import AlbumItem from "../components/AlbumItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  async componentDidMount() {
    const albums = await apiClient.getAlbums();
    this.setState({ 
      albums,
    })
  }

  render() {
    const { user } = this.props;
    const { albums } = this.state;
    return (
      <div>
        <Header title={`${user.username}'s Album`} buttonType="home" />
        {albums.map(album => {
          return <div className="album-card" key={album._id}><Link to={`album/${album._id}`}> <AlbumItem  album={album} /> </Link></div>
        })}
        <NavbarDown middlebutton={'/new-album'} middlebuttonName={"ADD"} />
      </div>
    )
  }
}

export default withAuth(Home);