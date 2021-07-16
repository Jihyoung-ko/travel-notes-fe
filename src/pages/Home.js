// import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';
import AlbumCard from "../components/AlbumCard";


class Home extends Component {
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
        "updated_at": "2021-07-13T21:49:13.640Z",
        "__v": 0,
        "photo": "photo url",
        "endDate": "2021-08-05T00:00:00.000Z"
    }
]
    }
  }

  // async componentDidMount() {
  //   console.log('hellooo');
  //   const res = await axios.get('http://localhost:5000/album');
  //   this.setState({
  //     albums: res.data
  //   })
  // }

  render() {
    const { albums } = this.state;
    return (
      <div>
        {albums.map(album => {
          return <div key={album.id}><Link to={'album/:id'}> <AlbumCard  album={album} /> </Link></div>
        })}
      </div>
    )
  }
}

export default withAuth(Home);