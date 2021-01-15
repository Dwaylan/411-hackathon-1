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
  }
  // use the below link to test how making multiple fetch requests depending on the search requests.
  // https://stackoverflow.com/questions/52882903/componentdidmount-multiple-fetch-calls-best-practice
  // which i have moved to a component of its own.
  componentDidMount() {
    console.log("mounted");
    this.fetchData();
  }

  fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
    .then((res) => res.json())
    .then((data) => {
      console.log("this is front page ", data)
      this.setState({ newsItem: data.hits })
    })
  }


  searchedItems = (items) => {
    // console.log("items", items);
    // console.log("this", this);
    this.setState({ newsItem: items });
  };
  

  render() {    

    return (
      <div className="App">
        <Stylesheet />
        <SearchForm searchedItems={this.searchedItems} />
        {/* so here im thinking of having a conditionally render decide if the form has been submitted determine if there 
        is a submition from the form or when the button is clicked? */}
        <ul>
          {this.state.newsItem &&
            this.state.newsItem.map((item) => {
              return (
                <NewsItem
                  key={item.objectID}
                  points={item.points}
                  commentNum={item.num_comments}
                  url={item.url}
                  date={item.created_at}
                  author={item.author}
                  title={item.title}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
export default App;
