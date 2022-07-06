/** Genre Toggle Component
 * Using PureComponent to stop re-rendering on state in parent changing potentially (https://betterprogramming.pub/when-to-use-react-purecomponent-723f85738be1)
 */

import React from "react";
import { PropTypes } from "prop-types";

export default class GenreToggle extends React.PureComponent {
	state = {
		chosenGenre: "All", // default
	};

	handleChange = (genre) => {
		this.setState({ chosenGenre: genre });
		this.props.onGenreSelected(genre);
	};

	renderItems = (genres) =>
		genres.map((genre) => {
			let setClass =
				this.state.chosenGenre === genre
					? "genreItem selected"
					: "genreItem";
			return (
				<div key={genre} className={setClass}>
					<span onClick={() => this.handleChange(genre)}>
						{genre}
					</span>
				</div>
			);
		});

	render = () => {
		return (
			<div className="genreChoices">
				{this.renderItems(this.props.genres)}
			</div>
		);
	};
}

GenreToggle.propTypes = {
	genres: PropTypes.string.isRequired,
	onGenreSelected: PropTypes.func.isRequired,
};
