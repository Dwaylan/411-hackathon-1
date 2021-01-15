import React, { Component } from "react";
import "./FetchNews.css"

export default class FetchNews extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       Promise.all([fetch("http://hn.algolia.com/api/v1/search?tags=front_page"), fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.value}&tags=story`)])
       .then(([res1, res2]) => {
           return Promise.all([res1.json(), res2.json()])
       })
       .then(([res1, res2]) => {
         console.log(data)
         this.setState({
            homeNewsItem: res1.hits,
            searchedNewsItems: res2.hits,
         })
       })
    }
    
    render(){
        return(

        )
    }
};
