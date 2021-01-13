import { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //https://reactjs.org/docs/lifting-state-up.html
   handleChange(e) {
    this.props.newsItemChange(e.target.value)
  }

  handleSubmit(e) {
    console.log(this.newsItem)
    console.log('Story search submitted ' + this.state.value)
    e.preventDefault()
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.value}&tags=story`)
    .then((res) => res.json())
    .then((data) => {
      console.log("this is the data ", data)
      this.setState({ newsItem: data.hits })
      console.log('update newsItems ', this.newsItem)
    })
    this.setState({value:''})
  }


  //from here i need to make either multiple search fields or drop down list and tie them in with the main page i will also need a on change function as well as button component and onClick function.
  render() {
    return (
      <div class="formContainer">
        <form onSubmit={this.handleSubmit} class="searchContainer">
          <input class="inputBar" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
