import React, { Component } from "react";
import NewsItem from "./components/itemComponents/NewsItem";
import SearchForm from "./components/searchFormComponent/SearchForm";
import Stylesheet from "./components/Stylesheet";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: [],
      searchedItems: [],
    };

    this.handleClick = this.handleClick.bind(this)
  }
 
  componentDidMount() {
    console.log("mounted");
    this.fetchData();
  }

  fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
    .then((res) => res.json())
    .then((data) => {
      this.setState({ newsItem: data.hits })
    })
  }


  searchedItems = (items) => {
    console.log("these are searched items", items)
    this.setState({ newsItem: items });
    
  };

  handleClick()  {
    const sorted = this.state.newsItem.sort((a, b) => b.created_at_i - a.created_at_i)
    this.setState({ newsItem: sorted})
    console.log("newsItems after date click ", this.state.newsItem)
  }

  render() {    

    return (
      <div className="App">
        <Stylesheet />
        <SearchForm searchedItems={this.searchedItems} />
        <button onClick={this.handleClick}>Sort by Date</button>
        <ul>
          {this.state.newsItem &&
            this.state.newsItem.map((item) => {
              return (
                <NewsItem
                  key={item.objectID}
                  points={item.points}
                  commentNum={item.num_comments}
                  url={item.url || item.story_url}
                  date={item.created_at}
                  author={item.author}
                  title={item.story_title || item.title}
                  time={item.created_at_i}
                />
              );
            })}
        </ul>
        {console.log("newsItem on render ",this.state.newsItem)}
      </div>
    );
  }
}
export default App;
