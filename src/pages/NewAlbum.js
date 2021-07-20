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
    console.log(this.state)
    await apiClient.addNewAlbum(this.state);

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
        <Header edit={true} title="New Album"/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Trip name" />
          <input type="date" name="startDate" value={startDate} onChange={this.handleChange} placeholder="Start Date" />
          <input type="date" name="endDate" value={endDate} onChange={this.handleChange} placeholder="End Date" />
          <input type="text" name="photo" value={photo} onChange={this.handleChange} placeholder="Add photo" />
          <button>Save</button>
        </form>
        <NavbarDown />
      </div>
      
    )
  }
}

export default withAuth(NewAlbum);