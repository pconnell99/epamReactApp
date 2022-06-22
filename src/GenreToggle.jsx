/** Genre Toggle Component 
 * Using PureComponent to stop re-rendering on state in parent changing potentially (https://betterprogramming.pub/when-to-use-react-purecomponent-723f85738be1)
*/

import React from "react";

export default class GenreToggle extends React.PureComponent {
    state = {
        chosenGenre: "All" // default
    };

    handleChange = genre => {
        this.setState({ chosenGenre: genre });
        this.props.onGenreSelected(genre);
    }

    renderItems = (genres) => genres.map(genre => {
            let setClass = this.state.chosenGenre === genre ? "genreItem selected" : "genreItem";
            return (<div key={genre} className={setClass}>
                <span onClick={() => this.handleChange(genre)}>{genre}</span>
            </div>);
        });

    render = () => {
        return (
            <div className="genreChoices">
                {this.renderItems(this.props.genres)}
            </div>
        )
    }
}