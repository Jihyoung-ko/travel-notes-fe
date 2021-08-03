import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import apiClient from "../lib/apiClient";
import Header from '../components/Header';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      query:"",
    }
  }

  async componentDidMount() {
    const articles = await apiClient.getAllArticles();
    this.setState({
      articles,
    })
  }

  searchHandler = (e) => {
    const { value } = e.target;
    this.setState({
      query: value})
  }

  goBackHandler = () => {
    this.props.history.goBack();
  }

  render() {
    const { query, articles } = this.state;
    const filteredArticle = articles.filter(article => article.note?.toLowerCase().includes(query.toLowerCase()) || article.people?.toLowerCase().includes(query.toLowerCase()) || article.location?.toLowerCase().includes(query.toLowerCase()) || article.time?.split('T', 1).includes(query) ) ;
    
    return(
      <div>
        <Header buttonType="search" buttonName="Cancel" onSearch={this.searchHandler} goBack={this.goBackHandler} />
        <div className="contents-container" style={{marginTop:"85px"}}>
          {query ? filteredArticle.map(article =>  <Link to={`/album/${article.album}/article/${article._id}`} key={article._id}><ArticleItem   article={article} /> </Link>) : "" }
        </div>
      </div>
      
    )
  }
}

export default Search;