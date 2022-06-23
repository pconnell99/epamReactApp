/** Implement a simple Search bar */

import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
    }

    handleChange = event => {
        this.setState({ searchTerm: event.target.value });
    }

    render = () => {
        return (
            <div>
                <input className="searchbar" type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="What do you want to watch?" />
                <input className="button" type="submit" value="Search"/>
            </div>
        )
    }
}