import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import ArticleItem from "../components/ArticleItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";
import DeleteModal from '../components/DeleteModal';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {},
      articles: [],
      showModal: false
    }
  }    

  async componentDidMount() {
    const { id } = this.props.match.params;
    const data = await apiClient.getAlbumAndArticles(id);
    this.setState({
      album: data[0],
      articles: data[1]
    })
  }

  toggleHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteAlbumHandler = async () => {
    const { id } = this.props.match.params;
    await apiClient.deleteAlbum(id);
    this.props.history.push('/home');

  }
    
  render() {
    const { album, articles, showModal } = this.state;
    const { id } = this.props.match.params;
    
    
    return(
      <div>
        <Header title={ album.title } onToggle={this.toggleHandler} buttonType="item" />
        { showModal && <DeleteModal onClose={this.toggleHandler} onDelete={this.deleteAlbumHandler} />}

        <div>
          {articles.map(article => {
            return <div key={article._id}><Link to={`/album/${id}/article/${article._id}`}> <ArticleItem  article={article} /> </Link></div>
          })}
        </div>
        <NavbarDown middlebutton={`/album/${id}/new-article`} middlebuttonName={"ADD"} />
      </div>
    )
  }
}

export default withAuth(Album);