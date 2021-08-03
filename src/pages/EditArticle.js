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
      people:"",
      time:""
    }
  }

  async componentDidMount() {
    const { albumId, articleId } = this.props.match.params;
    const data = await apiClient.getAlbumAndArticle(albumId,articleId);
    const { photo, note, location, people, time } = data[1];
    this.setState({
      album: data[0],
      photo,
      note,
      location,
      people,
      time
    })
  }

   handleSubmit = async (e) => {
    const { albumId, articleId } = this.props.match.params;
    e.preventDefault(); 
    await apiClient.editArticle(articleId, this.state);
    this.props.history.push(`/album/${albumId}/article/${articleId}`);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileUpload = (e) => {
    console.log('file upload', e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append('photo', e.target.files[0]);

    apiClient.handleUpload(uploadData)
    .then(response => {
      this.setState({ photo: response.secure_url })})
  }

  goBackHandler = () => {
    const { albumId, articleId } = this.props.match.params;
    this.props.history.push(`/album/${albumId}/article/${articleId}`);
  }

  render(){
    const { photo, note, location,  people, time } = this.state;
    return (
      <div>
        <Header buttonType="edit" title="Edit" buttonName="Cancel"  goBack={this.goBackHandler} />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit}>
            { photo &&<div className="edit-article-img-container"><img src={photo} alt="photo" /> </div> }
            <input type="file" name="photo"  onChange={this.handleFileUpload} placeholder="Change Photo" />
            <textarea className="note-input" type="text" name="note" value={note} onChange={this.handleChange} placeholder="Write a note..."/>
            <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="Add Place"/>
            <input type="text" name="people" value={people} onChange={this.handleChange} placeholder="Add People"/>
            <input type="date" name="time" value={time} onChange={this.handleChange} />
            <button className="save-btn">Save</button>
          </form>
        </div>
        <NavbarDown />
      </div>
  )
  }
  
}

export default EditArticle;