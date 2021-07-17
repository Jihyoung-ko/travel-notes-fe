import React, { Component } from 'react';
import apiClient from "../lib/apiClient";

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      albums: [],
      articles: [],
      filtered:[]
    }
  }


  async componentDidMount() {
    const data = await apiClient.getAllArticles();
    console.log(data);
    this.setState({
      albums: data[0],
      articles: data[1]
    })
  }
  
  searchHandler() {

  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return(
      <div>
        <input type="text"  placeholder="Search..." onChange={this.searchHandler}/>
        <button onClick={this.goBack}>X</button>
      </div>
    )
  }
}

export default Search;