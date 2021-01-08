import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: null,
    };
  }
  componentDidMount() {
    console.log("mounted");
    fetch("http://hn.algolia.com/api/v1/items/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ newsItem: data });
      });
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" />
          <button>search</button>
        </form>
        <ul>
          {this.state.newsItem &&
            this.state.newsItem.map((item) => {
              return (
                <item
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
