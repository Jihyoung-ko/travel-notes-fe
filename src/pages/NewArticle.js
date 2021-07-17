import axios from "axios";
import React, {Component} from "react";

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

   handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(this.state);
    axios.post('http://localhost:5000/article', this.state)
      .then(res => this.setState({
        note:"",
        photo:"",
        place:"",
        people:"",
        album:"",
      }))   
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { note, photo, place, people } = this.state;
    return(
      <div>
        <p>Upper Navbar here</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="note" value={note} onChange={this.handleChange} placeholder="Write a note..." />
          <input type="text" name="photo" value={photo} onChange={this.handleChange} placeholder="Add Photo" />
          <input type="text" name="place" value={place} onChange={this.handleChange} placeholder="Add Place" />
          <input type="text" name="people" value={people} onChange={this.handleChange} placeholder="Add People" />
          <button>Save</button>
        </form>
      </div>
      
    )
  }
}

export default NewArticle;