import { Component } from "react";
import "./SearchForm.css";


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: props.value,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)    
  }

 

 
   handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleSelectChange(e) {
    e.preventDefault();
    this.setState({ selectValue: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.selectValue === 'story') {
    
      fetch(
        `http://hn.algolia.com/api/v1/search?query=${this.state.inputValue}&tags=story`
      )
        .then((res) => res.json())
        .then((data2) => {
          const { searchedItems } = this.props;
          searchedItems(data2.hits);
        });
    } else{
     
    fetch(
      `http://hn.algolia.com/api/v1/search?query=author_:${this.state.inputValue}`
    )
      .then((res) => res.json())
      .then((data2) => {
        console.log(data2)
        const { searchedItems } = this.props;
        searchedItems(data2.hits);
      });
    }
  }


  render() {
    return (
      <div class="formContainer">
        <form onSubmit={this.handleSubmit} class="searchContainer">
          <input class="inputBar" type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <label>
            Search by:
            <select value={this.state.selectalue} name={this.props.name} onChange={this.handleSelectChange.bind(this)}>
              <option value="story">Stories</option>
              <option value="author">Authors</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchForm;