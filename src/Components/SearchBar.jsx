/** Implement a simple Search bar */
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const SearchBarContainer = styled.div`
	width: 100%;
`;

const SearchbarComponent = styled.input`
	color: #ffffff;
	border: 0;
	border-radius: 3px;
	padding: 8px 30px 8px 30px;
	background-color: #424242;
	opacity: 0.8;
	width: 55vw;
	.focus {
		outline: #ffffff;
		color: #ff0000;
	}
`;

const SearchButtonComponent = styled.button`
	color: #ffffff;
	background-color: #f65261;
	border: 0;
	border-radius: 3px;
	text-transform: uppercase;
	padding: 8px 30px 8px 30px;
	cursor: pointer;
`;

export default function SearchBar(props) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSearch(searchTerm);
	};

	return (
		<SearchBarContainer>
			<SearchbarComponent
				type="text"
				value={searchTerm}
				onChange={handleChange}
				placeholder="What do you want to watch?"
			/>
			&nbsp;
			<SearchButtonComponent onClick={handleSubmit}>
				Search
			</SearchButtonComponent>
		</SearchBarContainer>
	);
}

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
};
