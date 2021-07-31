// import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import AlbumItem from "../components/AlbumItem";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      loading: false,
    }
  }

  async getAlbums () {
    const albums = await apiClient.getAlbums();
    console.log('albums', albums);
    this.setState({
      albums,
    })
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    await this.getAlbums();
    this.setState({
      loading: false
    })
  }

  deleteAlbumHandler = async (id) => {
    this.setState({
      loading: true
    })
    await apiClient.deleteAlbum(id);
    await this.getAlbums();
    this.setState({
      loading: false
    })
  }

  render() {
    const { user } = this.props;
    const { albums } = this.state;

    return (
      <div>
        <Header title={`${user.username}'s Album`} buttonType="home" />
        <div className="contents-container">
          {!this.state.loading ? <><Link to={'/new-album'}> <button className="add-btn"> <FontAwesomeIcon icon="plus"/> </button> </Link>

          {albums.map(album => {
            return <div className="album-card" key={album._id} style={ album.photo? {backgroundImage: `url(${album.photo})`} : {backgroundColor:"white"} }>
              <Link to={`album/${album._id}`}>
                <AlbumItem  album={album} onDeleteAlbum = {this.deleteAlbumHandler} />
              </Link>
            </div>
          })}</> : <p>Loading...</p>}
        </div>
      </div>
    )
  }
}

export default withAuth(Home);