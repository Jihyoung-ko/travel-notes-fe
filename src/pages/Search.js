import React, { Component } from 'react';
import ArticleItem from '../components/ArticleItem';
import NavbarDown from '../components/NavbarDown';
import apiClient from "../lib/apiClient";

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      filtered:[],
    }
  }

  async componentDidMount() {
    console.log(this.props);
    const articles = await apiClient.getAllArticles();
    this.setState({
      articles,
    })
  }

  searchHandler = (e) => {
    const { articles } = this.state;
    const { value } = e.target;
    let filteredArticle = [];
    (value ? filteredArticle = articles.filter(article => article.note.includes(value)) : filteredArticle = [] );

    this.setState({
      filtered: filteredArticle})
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { filtered } = this.state;
    return(
      <div>
        <form>
          <input type="text"  placeholder="Search..." onChange={this.searchHandler}/>
          <button onClick={this.goBack}>X</button>
        </form>
        <div>

          { filtered !== [] ? filtered.map(article => <ArticleItem  key={article.id} article={article} />) : <p>Nothing found</p> }
        </div>
        <NavbarDown />
      </div>
      
    )
  }
}

export default Search;