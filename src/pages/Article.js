import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarDown from '../components/NavbarDown';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';
import DeleteModal from '../components/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {},
      article: {},
      showModal: false
    }
  }

  async componentDidMount() {
    const { albumId, articleId } = this.props.match.params;
    const data = await apiClient.getAlbumAndArticle(albumId,articleId);
    this.setState({
      album: data[0],
      article: data[1]
    })
  }

  toggleHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteArticleHandler = async () => {
    const { albumId, articleId } = this.props.match.params;
    await apiClient.deleteArticle(articleId);
    this.props.history.push(`/album/${albumId}`);
  }

  render(){
    const { album, showModal } = this.state;
    const { photo, note, location, time, people } = this.state.article;
    const { albumId, articleId } = this.props.match.params;
    return (
    <div>
      <Header title={album.title} buttonType="item" buttonName="BACK" />

      { showModal && <DeleteModal onClose={this.toggleHandler} onDelete={this.deleteArticleHandler} />}

      <div className="contents-container  ">
        <div className="article-detail-container">

        <div className="article-button-container">

          <Link to={`/album/${albumId}/article/${articleId}/edit`}>
            <button className="article-btn" style={{top:"10px", right:"40px"}} ><FontAwesomeIcon icon={['far', 'edit']}  size="lg"/></button> 
          </Link>

          <button className="article-btn" style={{top:"10px", right:"0px"}} onClick={this.toggleHandler}><FontAwesomeIcon icon={['far', 'trash-alt']} size="lg" /></button>
        </div>

          { photo ? <div className="article-img-container"><img src={photo} alt="photo"  /> </div> : "" }
          <p>{note}</p>
          <p>{ location && `At ${location}`} { time && time.split('T', 1) } { people && `with ${people}`}  </p>
        </div>
      </div>
      <NavbarDown />
    </div>
  )
  }
  
}

export default Article;