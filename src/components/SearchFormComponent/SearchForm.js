import { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }
  //from here i need to make either multiple search fields or drop down list and tie them in with the main page i will also need a on change function as well as button component and onClick function.
  render() {
    return (
      <div class="formContainer">
        <form class="searchContainer">
          <input class="inputBar" type="text" />
          <button class="button">search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
