
import React, {Component} from "react";
import apiClient from "../lib/apiClient";

import Header from "../components/Header";
import NavbarDown from "../components/NavbarDown";
import { withAuth } from '../providers/AuthProvider';


class NewArticle extends Component {
  constructor(props){
    super(props);
    const { id } = this.props.match.params;
    this.state = {
      note:"",
      photo:"",
      time:{},
      location:"",
      people:"",
      album: id.toString(),
    }
  }

   handleSubmit = async (e) => {
    const { id } = this.props.match.params;
    e.preventDefault(); 
    console.log(this.state);
    await apiClient.addNewArticle(this.state);
    this.props.history.push(`/album/${id}`);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      time: new Date()
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
    const { id } = this.props.match.params;
    this.props.history.push(`/album/${id}`);
   }

  render(){
    const { note, location, people } = this.state;
  
    return(
      <div>
        <Header buttonType="edit" title="New Article" buttonName="Cancel"  goBack={this.goBackHandler} />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit}>
            <textarea className="note-input" type="text" name="note" value={note} onChange={this.handleChange} placeholder="Write a note..." />
            <input type="file" name="photo" id="photo" onChange={this.handleFileUpload} placeholder="Add Photo"  />
            <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="Add Place" />
            <input type="text" name="people" value={people} onChange={this.handleChange} placeholder="Add People" />
            <button className="save-btn">Save</button>
          </form>
        </div>
        <NavbarDown />
      </div>
      
    )
  }
}

export default withAuth(NewArticle);