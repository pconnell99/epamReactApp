/** Container for Search Results system */
import React from "react";
import { PropTypes } from "prop-types";
import GenreToggle from "./GenreToggle";
import SearchResult from "./SearchResult";

export default function SearchBody(props) {
    console.log(props);
	return (
		<>
			<GenreToggle
				genres={props.genres}
				onGenreSelected={props.onGenreSelected}
			/>
			<h3>{props.searchResults.length} movies found</h3>
			{props.searchResults.map((result) => {
				return <SearchResult key={result.id} result={result} />;
			})}
		</>
	);
}

SearchBody.propTypes = {
	genres: PropTypes.array.isRequired,
	onGenreSelected: PropTypes.func.isRequired,
	searchResults: PropTypes.array.isRequired,
};
