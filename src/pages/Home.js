// import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import AlbumItem from "../components/AlbumItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
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
        <div className="contents-container">
          <Link to={'/new-album'}> <button className="add-btn"> <FontAwesomeIcon icon="plus"/> </button> </Link>
          {albums.map(album => {
            console.log(album)
            return <div className="album-card" key={album._id} style={ album.photo? {backgroundImage: `url(${album.photo})`} : {backgroundColor:"white"} }><Link to={`album/${album._id}`}> <AlbumItem  album={album} /> </Link></div>
          })}
        </div>
        <NavbarDown />
      </div>
    )
  }
}

export default withAuth(Home);