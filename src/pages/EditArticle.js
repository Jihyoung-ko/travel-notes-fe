import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';
import NavbarDown from '../components/NavbarDown';

class EditArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      photo:"",
      note:"",
      location:"",
      people:""
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const article = await apiClient.getArticle(id);
    console.log(article);
    this.setState({
      photo: article.photo,
      note: article.note,
      location: article.location,
      people:article.people
    })
  }

   handleSubmit = async (e) => {
    const { id } = this.props.match.params;
    e.preventDefault(); 
    await apiClient.editArticle(id, this.state);
  }

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { photo, note, location,  people } = this.state;
    return (
      <div>
        <Header edit={true} title="Album name" />
        <form onSubmit={this.handleSubmit}>
          <div>{photo}Photo here</div>
          <input type="text" name="note" value={note} onChange={this.handelChange}/>
          <input type="text" name="location" value={location} onChange={this.handelChange}/>
          <input type="text" name="people" value={people} onChange={this.handelChange}/>
          <button>Save</button>
        </form>
        <NavbarDown />
      </div>
    
  )
  }
  
}

export default EditArticle;