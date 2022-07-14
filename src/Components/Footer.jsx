import React from "react";
import styled from "styled-components";

const CompanyNameText = styled.div`
	width: 100%;
	margin: auto;
	color: #f65261;
	text-align: center;
    backhground-color: #424242;
`;

export default function Footer() {
	return (
		<CompanyNameText>
			<strong>netflix</strong>roulette
		</CompanyNameText>
	);
}
