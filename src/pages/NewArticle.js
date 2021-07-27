
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
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { note, photo, location, people } = this.state;
  
    return(
      <div>
        <Header buttonType="edit" title="New Article" buttonName="CANCEL" />
        <div className="contents-container">
          <form onSubmit={this.handleSubmit}>
            <textarea className="note-input" type="text" name="note" value={note} onChange={this.handleChange} placeholder="Write a note..." />
            <input type="text" name="photo" value={photo} onChange={this.handleChange} placeholder="Add Photo" />
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