/** Genre Toggle Component
 * Using PureComponent to stop re-rendering on state in parent changing potentially (https://betterprogramming.pub/when-to-use-react-purecomponent-723f85738be1)
 */

import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const GenreChoicesContainer = styled.div`
	display: inline-flex;
`;

const GenreItem = styled.div`
	margin: 10px;
	text-transform: uppercase;
	border-bottom: 1px solid ${(props) => (props.selected === true ? "red" : "inherit")};
	cursor: pointer;
`;

export default function GenreToggle(props) {
	const [chosenGenre, setChosenGenre] = useState("All");

	const handleChange = (genre) => {
		setChosenGenre(genre);
		props.onGenreSelected(genre);
	};

	const renderItems = (genres) =>
		genres.map((genre) => {
			return (
				<GenreItem key={genre} selected={chosenGenre === genre}>
					<span onClick={() => handleChange(genre)}>{genre}</span>
				</GenreItem>
			);
		});

	return (
		<GenreChoicesContainer>
			{renderItems(props.genres)}
		</GenreChoicesContainer>
	);
}

GenreToggle.propTypes = {
	genres: PropTypes.string.isRequired,
	onGenreSelected: PropTypes.func.isRequired,
};
