/** Add Movie button */
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const AddButtonComponent = styled.button`
	color: #f65261;
	background-color: #424242;
	border: 0;
	border-radius: 3px;
	text-transform: uppercase;
	padding: 8px 30px 8px 30px;
	min-width: 50px;
	max-width: 250px;
	cursor: pointer;
	float: right;
`;

export default function AddMovieButton(props) {
	return (
		<AddButtonComponent onClick={props.onAddMovie}>
			+ Add Movie
		</AddButtonComponent>
	);
}
