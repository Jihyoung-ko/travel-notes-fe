import React, {Component} from "react";
import Header from "../components/Header";
import NavbarDown from "../components/NavbarDown";

class NewAlbum extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      startDate:"",
      endDate:"",
      photo:"",
      user:"",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
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
        </form>
        <NavbarDown />
      </div>
      
    )
  }
}

export default NewAlbum;