import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const ResultContainer = styled.div`
	width: 100%;
	cursor: pointer;
	padding-bottom: 10px;
`;

const ImageContainer = styled.img`
	width: 85%;
	margin: auto;
	display: block;
`;

const TitleInformationContainer = styled.div`
	width: 85%;
	display: block;
	margin: auto;
	padding: 5px;
`;

const YearContainer = styled.div`
	border: 1px solid white;
	float: right;
`;

export default function SearchResult(props) {
	return (
		<ResultContainer>
			<ImageContainer
				src={props.result.poster_path}
				onError={(e) => console.log(e)}
				alt={props.result.overview}
			/>
			<TitleInformationContainer>
				{props.result.title}
				<YearContainer>
					{props.result.release_date.split("-")[0]}
				</YearContainer>

				<>
					<br />
					{props.result.genres.join(", ")}
				</>
			</TitleInformationContainer>
		</ResultContainer>
	);
}

SearchResult.propTypes = {
	result: PropTypes.object.isRequired,
};
