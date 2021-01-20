import { Component } from "react";
import "./SearchForm.css";


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 

  //https://reactjs.org/docs/lifting-state-up.html
   handleChange(e) {
    this.setState({ value: e.target.value })
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(e);
  //   console.log("Story search submitted " + this.state.value);
  //   fetch(
  //     `http://hn.algolia.com/api/v1/search?query=${this.state.value}&tags=story`
  //   )
  //     .then((res) => res.json())
  //     .then((data2) => {
  //       const { searchedItems } = this.props;
  //       searchedItems(data2.hits);
  //     });
  //}

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(e);
  //   console.log("Story search submitted " + this.state.value);
  //   fetch(
  //     `http://hn.algolia.com/api/v1/search_by_date?query=created_at_i>0`
  //         )
  //     .then((res) => res.json())
  //     .then((data2) => {
  //       const { searchedItems } = this.props;
  //       searchedItems(data2.hits);
  //     });
  // }

   handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    console.log("Story search submitted " + this.state.value);
    fetch(
      `http://hn.algolia.com/api/v1/search?query=author_:${this.state.value}`
    )
      .then((res) => res.json())
      .then((data2) => {
        const { searchedItems } = this.props;
        searchedItems(data2.hits);
      });
  }

  //if search by query leave props by author blank and vise versa by searching author. 


  //make a button that has a function that gets most recent articles. search by most recent or author

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