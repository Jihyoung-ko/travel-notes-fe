import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';
import NavbarDown from '../components/NavbarDown';

class EditArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {},
      photo:"",
      note:"",
      location:"",
      people:""
    }
  }

  async componentDidMount() {
    const { albumId, articleId } = this.props.match.params;
    const data = await apiClient.getAlbumAndArticle(albumId,articleId);
    const { photo, note, location, people } = data[1];
    this.setState({
      album: data[0],
      photo,
      note,
      location,
      people
    })
  }

   handleSubmit = async (e) => {
    const { albumId, articleId } = this.props.match.params;
    e.preventDefault(); 
    await apiClient.editArticle(articleId, this.state);
    this.props.history.push(`/album/${albumId}/article/${articleId}`);
  }

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { album, photo, note, location,  people } = this.state;
    return (
      <div>
        <Header buttonType="edit" title={album.title} buttonName="CANCEL" />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit}>
            <div>{photo}Photo here</div>
            <input type="text" name="note" value={note} onChange={this.handelChange} placeholder="Write a note..."/>
            <input type="text" name="location" value={location} onChange={this.handelChange} placeholder="Add Place"/>
            <input type="text" name="people" value={people} onChange={this.handelChange} placeholder="Add People"/>
            <button className="save-btn">Save</button>
          </form>
        </div>
        <NavbarDown />
      </div>
  )
  }
  
}

export default EditArticle;