import React, { Component } from 'react';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';
import NavbarDown from '../components/NavbarDown';

class EditArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      article:{}
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const article = await apiClient.getArticle(id);
    this.setState({
      article,
    })
  }

  handelChange = (e) => {
    console.log(this.state)
    this.setState({
     article:{
      [e.target.name]: e.target.value
     } 
    })
  }

  render(){
    const { photo, note, place,  people } = this.state.article;
    return (
      <div>
        <Header edit={true} title="Album name" />
        <form>
          <div>{photo}Photo here</div>
          <input type="text" name="note" value={note} onChange={this.handelChange}/>
          <input type="text" name="place" value={place} onChange={this.handelChange}/>
          <input type="text" name="people" value={people} onChange={this.handelChange}/>
        </form>
        <NavbarDown />
      </div>
    
  )
  }
  
}

export default EditArticle;