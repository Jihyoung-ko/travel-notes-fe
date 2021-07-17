import React, { Component } from 'react';
import NavbarDown from '../components/NavbarDown';
import apiClient from '../lib/apiClient';
import Header from '../components/Header';

class Article extends Component {
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

  render(){
    const { photo, note, location, time, people } = this.state.article;
    const { id } = this.props.match.params;
    return (
    <div>
      <Header title="Album name"/>
      <div>{photo}Photo here</div>
      <div>{note}</div>
      <div>{location}{time}{people}</div>
      <NavbarDown middlebutton={`/${id}/edit`} middlebuttonName={"EDIT"}/>
    </div>
  )
  }
  
}

export default Article;