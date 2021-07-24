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

  render(){
    const { title, startDate, endDate, photo } = this.state;
    return(
      <div>
        <Header buttonType="edit" title="New Album"/>
        <form onSubmit={this.handleSubmit} className="newAlbum-form">
          <input className="newAlbum-input" type="text" name="title" value={title} onChange={this.handleChange} placeholder="Trip name" />
          <label>Start Date</label>
          <input className="newAlbum-input" type="date" name="startDate" value={startDate} onChange={this.handleChange} placeholder="Start Date" />
          <label>End Date</label>
          <input className="newAlbum-input" type="date" name="endDate" value={endDate} onChange={this.handleChange} placeholder="End Date" />
          <input className="newAlbum-input" type="text" name="photo" value={photo} onChange={this.handleChange} placeholder="Add photo" />
          <button className="save-btn">Save</button>
        </form>
        <NavbarDown />
      </div>
      
    )
  }
}

export default withAuth(NewAlbum);