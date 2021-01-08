import React, { Component } from 'react'
import './NewsItem.css'

class NewsItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}

export default NewsItem
