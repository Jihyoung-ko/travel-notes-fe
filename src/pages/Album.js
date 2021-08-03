import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import ArticleItem from "../components/ArticleItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";
import DeleteModal from '../components/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

  goBackHandler = () => {
    this.props.history.push('/home');
   }
    
  render() {
    const { album, articles, showModal } = this.state;
    const { id } = this.props.match.params;
    const backIcon = <FontAwesomeIcon icon="chevron-left" size="lg"/>
    
    return(
      <div>
        <Header title={ album.title } onToggle={this.toggleHandler} buttonType="item" buttonName={backIcon} goBack={this.goBackHandler} />
        { showModal && <DeleteModal onClose={this.toggleHandler} onDelete={this.deleteAlbumHandler} />}
        
        <div className="contents-container" style={{marginBottom:"75px"}}>
          <Link to={`/album/${id}/new-article`}><button className="add-btn"><FontAwesomeIcon icon="plus"/></button> </Link>
          {articles.map(article => {
              return <Link to={`/album/${id}/article/${article._id}`} key={article._id}> <ArticleItem  article={article} /> </Link>
          })}
        </div>
        <NavbarDown />
      </div>
    )
  }
}

export default withAuth(Album);