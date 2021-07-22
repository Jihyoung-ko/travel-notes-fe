import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import ArticleItem from "../components/ArticleItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      articles: []
    }
  }    

  async componentDidMount() {
    const { id } = this.props.match.params;
    const data = await apiClient.getAlbumsAndArticles(id);
    this.setState({
      albums: data[0],
      articles: data[1]
    })
  }

  deleteAlbumHandler = async () => {
    const { id } = this.props.match.params;
    await apiClient.deleteAlbum(id);
    this.props.history.push('/home');

  }
    
  render() {
    const {  albums, articles } = this.state;
    const { id } = this.props.match.params;
    const currentAlbum = albums.find(album => album._id === id)
    console.log(currentAlbum);
    
    return(
      <div>
        <Header title="Album name" onDelete={this.deleteAlbumHandler} />
        {/* <h1>{currentAlbum.title}</h1> */}
        <div>
          {articles.map(article => {
            return <div key={article._id}><Link to={`/article/${article._id}`}> <ArticleItem  article={article} /> </Link></div>
          })}
        </div>
        <NavbarDown middlebutton={`/album/${id}/new-article`} middlebuttonName={"ADD"} />
      </div>
    )
  }
}

export default withAuth(Album);