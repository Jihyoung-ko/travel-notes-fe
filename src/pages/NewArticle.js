
import React, {Component} from "react";
import apiClient from "../lib/apiClient";

import Header from "../components/Header";
import NavbarDown from "../components/NavbarDown";

class NewArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      note:"",
      photo:"",
      place:"",
      people:"",
      album:"",
    }
  }

   handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log(this.state);
    await apiClient.addNewArticle(this.state);
    this.setState({
        note:"",
        photo:"",
        place:"",
        people:"",
        album:"",
      })   
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { note, photo, place, people } = this.state;
    console.log(this.props);
    return(
      <div>
        <Header edit={true} title="New Article"/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="note" value={note} onChange={this.handleChange} placeholder="Write a note..." />
          <input type="text" name="photo" value={photo} onChange={this.handleChange} placeholder="Add Photo" />
          <input type="text" name="place" value={place} onChange={this.handleChange} placeholder="Add Place" />
          <input type="text" name="people" value={people} onChange={this.handleChange} placeholder="Add People" />
          <button>Save</button>
        </form>
        <NavbarDown />
      </div>
      
    )
  }
}

export default NewArticle;