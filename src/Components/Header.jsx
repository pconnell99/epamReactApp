/** Holds the top menu sction of the App */
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

const HeaderComponent = styled.div`
	background-color: #232323;
	height: 35vh;
	color: #ffffff;
	font-size: 15px;
	background-image: url("/images/headerbg.jpg");
	background-size: cover;
	padding: 10px 20px 10px 20px;
`;

const CompanyNameText = styled.span`
	color: #f65261;
`;

const HeaderText = styled.h1`
	text-transform: uppercase;
`;

const SearchBarContainer = styled.div`
	margin: auto;
	width: 75%;
`;

export default function Header(props) {
	return (
		<HeaderComponent>
			<>
				<CompanyNameText>
					<strong>netflix</strong>roulette
				</CompanyNameText>
				<AddMovie />
			</>
			<SearchBarContainer>
				<HeaderText>Find Your Movie</HeaderText>
				<SearchBar onSearch={props.onSearch}/>
			</SearchBarContainer>
		</HeaderComponent>
	);
}

Header.propTypes = {
	onSearch: PropTypes.func.isRequired,
};
