import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import * as loadingPosterImage from "../../public/images/loadingPoster.jpg";
import * as loadingPosterErrorImage from "../../public/images/loadingPosterError.jpg";

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

/** TMDB doesn't like a full load of allt he images we may reeceive, so we buffer the requests by a small amount to stop 429's
 * TODO switch to Intersection Observer API (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 */
function ImagerLoader(imageURL, event) {
	const [maxtime, mintime] = [1000, 300];
	let pause = Math.floor(Math.random() * (maxtime - mintime) + mintime);
	setTimeout(() => {
		event.target.src = imageURL;
	}, pause);
}

export default function SearchResult(props) {
	return (
		<ResultContainer>
			<ImageContainer
				src="public/images/loadingPoster.jpg"
				onLoad={(event) => {
					ImagerLoader(props.result.poster_path, event);
				}}
				onError={
					(event) =>
						(event.target.src =
							"public/images/loadingPosterError.jpg") // default error handler for misisng images
				}
				alt={props.result.overview}
				loading="lazy"
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
