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
      filtered:[],
    }
  }

  async componentDidMount() {
    const articles = await apiClient.getAllArticles();
    this.setState({
      articles,
    })
  }

  searchHandler = (e) => {
    const { articles } = this.state;
    const { value } = e.target;
    let filteredArticle = [];
    (value ? filteredArticle = articles.filter(article => article.note.includes(value)) || articles.filter(article => article.people.includes(value))  || articles.filter(article => article.location.includes(value)) : filteredArticle = [] );

    this.setState({
      filtered: filteredArticle})
  }

  render() {
    const { filtered } = this.state;
    return(
      <div>
        <Header edit={true} title="Search"/>
        <form>
          <input type="text"  placeholder="Search..." onChange={this.searchHandler}/>
        </form>
        <div>

          { filtered !== [] ? filtered.map(article =>  <Link to={`/album/${article.album}/article/${article._id}`} key={article.id}><ArticleItem   article={article} /> </Link>) : <p>Nothing found</p> }
        </div>
      </div>
      
    )
  }
}

export default Search;