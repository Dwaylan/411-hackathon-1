import React, { Component } from "react";
import NewsItem from "./components/itemComponents/NewsItem";
import SearchForm from "./components/SearchFormComponent/SearchForm";
import Stylesheet from "./components/Stylesheet";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: null,
    };
  }
  // use the below link to test how making multiple fetch requests depending on the search requests.
  // https://stackoverflow.com/questions/52882903/componentdidmount-multiple-fetch-calls-best-practice
  componentDidMount() {
    console.log("mounted");
    this.fetchData();
  }

  fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ newsItem: data.hits })
    })
  }


  render() {

    return (
      <div className="App">
        <Stylesheet />
        <SearchForm newsItemChange={this.newFetchedData}/>
        <ul>
          {this.state.newsItem &&
            this.state.newsItem.map((item) => {
              return (
                <NewsItem
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
