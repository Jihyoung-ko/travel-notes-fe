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

  goBackHandler = () => {
    const { albumId } = this.props.match.params;
    this.props.history.push(`/album/${albumId}`);
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
    const timeformat = new Date(time).toLocaleDateString()  + ' ' + new Date(time).getHours() + ':' + new Date(time).getMinutes()
    const backIcon = <FontAwesomeIcon icon="chevron-left" size="lg"/>

    return (
    <div>
      <Header title={album.title} buttonType="item" buttonName={backIcon} goBack={this.goBackHandler} />

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
          <p>
          { location &&  <span> <FontAwesomeIcon icon="map-marker-alt"/> { location } </span> }  
          
          { people && <span> <FontAwesomeIcon icon="user-friends" /> { people } </span> }  

          { time && <span className="article-text-time"> <FontAwesomeIcon icon={['far', 'clock']} /> {timeformat} </span>}  
          </p>

        </div>
      </div>
      <NavbarDown />
    </div>
  )
  }
  
}

export default Article;