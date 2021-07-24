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
    // let filteredArticle = [];
    // (value ? filteredArticle = articles.filter(article => article.note?.includes(value) ||  article.people?.includes(value) || article.location?.includes(value))  : filteredArticle = [] );

    this.setState({
      query: value})
  }

  render() {
    const { query, articles } = this.state;
    const filteredArticle = articles.filter(article => article.note?.toLowerCase().includes(query.toLowerCase()) || article.people?.toLowerCase().includes(query.toLowerCase()) || article.location?.toLowerCase().includes(query.toLowerCase()) ) ;

    return(
      <div>
        <Header buttonType="edit" title="Search"/>
        <form>
          <input type="text"  placeholder="Search..." onChange={this.searchHandler}/>
        </form>
        <div>

          {query ? filteredArticle.map(article =>  <Link to={`/album/${article.album}/article/${article._id}`} key={article._id}><ArticleItem   article={article} /> </Link>) : "" }
        </div>
      </div>
      
    )
  }
}

export default Search;