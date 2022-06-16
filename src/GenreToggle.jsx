/** Genre Toggle Component 
 * Using PureComponent to stop renrendering on state in parent changing potentially (https://betterprogramming.pub/when-to-use-react-purecomponent-723f85738be1)
*/

import React from "react";

export default class GenreToggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            chosenGenre: "All" // default
        };
    }

    handleChange = genre => {
        this.setState({ chosenGenre: genre });
        this.props.onGenreSelected(genre);
    }

    genreItems = () => {
        return this.props.genres.map(genre => {
            return (<div key={genre} className={this.state.chosenGenre === genre ? "genreItem selected" : "genreItem"}>
                <span onClick={() => { this.handleChange(genre); }}>{genre}</span>
            </div>);
        });
    }

    render = () => {
        return (
            <div className="genreChoices">
                {this.genreItems()}
            </div>
        )
    }
}