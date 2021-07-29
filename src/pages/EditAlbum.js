import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';
import NavbarDown from '../components/NavbarDown';
import { withAuth } from '../providers/AuthProvider';


class EditAlbum extends Component {
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

  async componentDidMount() {
    const { id } = this.props.match.params;
    const album = await apiClient.getAlbum(id);
    const { title, startDate, endDate } = album;
    this.setState({
      title,
      startDate,
      endDate
    })
  }

   handleSubmit = async (e) => {
    const { id } = this.props.match.params;
    console.log(id)
    e.preventDefault(); 
    await apiClient.editAlbum(id, this.state);
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
    return (
      <div>
        <Header buttonType="edit" title="Edit" buttonName="CANCEL" />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Trip name"/>
            <input type="date" name="startDate" value={startDate} onChange={this.handleChange}/>
            <input type="date" name="endDate" value={endDate} onChange={this.handleChange}/>
            <input type="file" name="photo" onChange={this.handleFileUpload} placeholder="Add photo" />
            <button className="save-btn">Save</button>
          </form>
        </div>
        <NavbarDown />
      </div>
  )
  }
  
}

export default withAuth(EditAlbum);