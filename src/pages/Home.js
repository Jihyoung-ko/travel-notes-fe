// import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import AlbumItem from "../components/AlbumItem";
import NavbarDown from "../components/NavbarDown";


class Home extends Component {

  async componentDidMount() {
    const albums = await apiClient.getAlbums();
    console.log(albums);
  }

  render() {
    const { albums, user } = this.props;
    return (
      <div>
        <h1>{user.username}´s Album</h1>
        {albums.map(album => {
          return <div key={album._id}><Link to={`album/${album._id}`}> <AlbumItem  album={album} /> </Link></div>
        })}
        <NavbarDown middlebutton={'/new-album'} middlebuttonName={"ADD"} />
      </div>
    )
  }
}

export default withAuth(Home);