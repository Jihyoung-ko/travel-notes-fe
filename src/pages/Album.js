import React, { Component } from "react";
import { Link } from 'react-router-dom';
import apiClient from "../lib/apiClient";

import { withAuth } from '../providers/AuthProvider';
import ArticleItem from "../components/ArticleItem";
import NavbarDown from "../components/NavbarDown";
import Header from "../components/Header";

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [],
      articles: []
    }
  }    

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    const data = await apiClient.getAlbumsAndArticles(id);
    console.log(data);
    this.setState({
      albums: data[0],
      articles: data[1]
    })
  }
    
  render() {
    const {  articles } = this.state;
    // const { id } = this.props.match.params;
    
    return(
      <div>
        <Header title="Album name"/>
        {/* <p>{currentAlbum.title}</p> */}
        <div>
          {articles.map(article => {
            return <div key={article._id}><Link to={`/article/${article._id}`}> <ArticleItem  article={article} /> </Link></div>
          })}
        </div>
        <NavbarDown middlebutton={'/new-article'} middlebuttonName={"ADD"} />
      </div>
    )
  }
}

export default withAuth(Album);