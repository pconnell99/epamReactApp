/** Container for Search Results system */
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import GenreToggle from "./GenreToggle";
import SearchResult from "./SearchResult";
import styled from "styled-components";
import ErrorBoundary from "./ErrorBoundary";

const SearchResultsContainer = styled.div`
	display: inline-grid;
	grid-template-columns: auto auto auto auto auto;
	padding: 10px;
`;

export default function SearchBody(props) {
	const GENRES = ["All", "Documentary", "Comedy", "Horror", "Crime"]; // Hardcode for now.
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		setSearchResults(props.searchResults);
	}, [props]);

	const onGenreSelected = (genre) => {
		if (genre === "All") {
			setSearchResults(props.searchResults);
		} else {
			setSearchResults(
				props.searchResults.filter((result) =>
					result.genres.includes(genre)
				)
			);
		}
	};

	return (
		<>
			<GenreToggle genres={GENRES} onGenreSelected={onGenreSelected} />
			<h3>{searchResults.length} movies found</h3>
			<ErrorBoundary>
				<SearchResultsContainer>
					<ErrorBoundary>
						{searchResults.map((result) => {
							return (
								<SearchResult key={result.id} result={result} />
							);
						})}
					</ErrorBoundary>
				</SearchResultsContainer>
			</ErrorBoundary>
		</>
	);
}

SearchBody.propTypes = {
	searchResults: PropTypes.array.isRequired,
};
