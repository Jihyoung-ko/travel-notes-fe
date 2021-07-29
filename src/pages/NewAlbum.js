import React, {Component} from "react";
import apiClient from "../lib/apiClient";

import Header from "../components/Header";
import NavbarDown from "../components/NavbarDown";
import { withAuth } from '../providers/AuthProvider';


class NewAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      startDate:"",
      endDate:"",
      photo:"",
      user:this.props.user._id,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await apiClient.addNewAlbum(this.state);
    this.props.history.push('/home');
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

  render(){
    const { title, startDate, endDate } = this.state;
    return(
      <div>
        <Header buttonType="edit" title="New Album" buttonName="CANCEL" />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit} className="newAlbum-form">
            <input className="newAlbum-input" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Trip name" />
            <input className="newAlbum-input" type="text" name="startDate" value={startDate} onChange={this.handleChange} placeholder="Start Date" onFocus={e => (e.target.type = "date")} />
            <input className="newAlbum-input" type="text" name="endDate" value={endDate} onChange={this.handleChange} placeholder="End Date" onFocus={e => (e.target.type = "date")} />
            <input className="newAlbum-input" type="file" name="photo"  onChange={this.handleFileUpload} placeholder="Add photo" />
            <button className="save-btn">Save</button>
          </form>
        </div>
        <NavbarDown />
      </div>
      
    )
  }
}

export default withAuth(NewAlbum);