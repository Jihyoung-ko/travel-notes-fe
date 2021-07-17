import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';
import ArticleItem from "../components/ArticleItem";

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [
    {
        "_id": "60effc9a368cff2ebdf614a0",
        "note": "doing routes test",
        "time": "2021-07-15T00:00:00.000Z",
        "album": "60ede76a5ae256196dd9881e",
        "created_at": "2021-07-15T09:15:06.367Z",
        "updated_at": "2021-07-15T09:15:06.367Z",
        "__v": 0
    },
    {
        "_id": "60effe7b368cff2ebdf614a7",
        "note": "doing another test",
        "time": "2021-07-15T00:00:00.000Z",
        "album": "60ede76a5ae256196dd9881e",
        "created_at": "2021-07-15T09:23:07.738Z",
        "updated_at": "2021-07-15T09:23:07.738Z",
        "__v": 0
    },
    {
        "_id": "60f008df368cff2ebdf614b1",
        "note": "third article",
        "time": "2021-07-15T00:00:00.000Z",
        "album": "60ede76a5ae256196dd9881e",
        "created_at": "2021-07-15T10:07:27.316Z",
        "updated_at": "2021-07-15T10:07:27.316Z",
        "__v": 0
    }
]
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Album name</h1>
        <div>
          {articles.map(article => {
            return <div key={article._id}><Link to={`article/${article._id}`}> <ArticleItem  article={article} /> </Link></div>
          })}
        </div>
        <div>Navbar here</div>
      </div>
    )
  }
}

export default withAuth(Album);