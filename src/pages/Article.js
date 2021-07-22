import React, { Component } from 'react';
import NavbarDown from '../components/NavbarDown';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {},
      article: {}
    }
  }

  async componentDidMount() {
    const { albumId, articleId } = this.props.match.params;
    const data = await apiClient.getAlbumAndArticle(albumId,articleId);
    console.log('Album:',data[0], 'Article:', data[1])
    this.setState({
      album: data[0],
      article: data[1]
    })
  }

  deleteArticleHandler = async () => {
    const { albumId, articleId } = this.props.match.params;
    await apiClient.deleteArticle(articleId);
    this.props.history.push(`/album/${albumId}`);

  }

  render(){
    const { album } = this.state;
    const { photo, note, location, time, people } = this.state.article;
    const { albumId, articleId } = this.props.match.params;

    return (
    <div>
      <Header title={album.title} onDelete={this.deleteArticleHandler} />
      <div>{photo}Photo here</div>
      <div>{note}</div>
      <div>{location}{time}{people}</div>
      <NavbarDown middlebutton={`/album/${albumId}/article/${articleId}/edit`} middlebuttonName={"EDIT"}/>
    </div>
  )
  }
  
}

export default Article;