import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';
import AlbumItem from "../components/AlbumItem";


class Home extends Component {

  async componentDidMount() {
    const res = await axios.get('http://localhost:5000/album');
    console.log(res);
    
  }

  render() {
    const { albums, user } = this.props;
    return (
      <div>
        <h1>{user.username}´s Album</h1>
        {albums.map(album => {
          return <div key={album._id}><Link to={`album/${album._id}`}> <AlbumItem  album={album} /> </Link></div>
        })}
      </div>
    )
  }
}

export default withAuth(Home);