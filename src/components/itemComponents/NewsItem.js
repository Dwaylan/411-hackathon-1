import React, { Component } from "react";
import "./NewsItem.css";

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container">
        <a className="headers" href={this.props.url}>
          {this.props.title} ({this.props.url})
        </a>
        <p>
          {this.props.points} points | {this.props.author} | {this.props.date} |{" "}
          {this.props.commentNum} comments
        </p>
      </div>
    );
  }
}

export default NewsItem;
