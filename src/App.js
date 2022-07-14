import React from "react";
import GlobalStyle from "./GlobalStyles";

import GenreToggle from "./Components/GenreToggle";
import { Header } from "../src/Components/Header";

function App() {
	const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];

	const genreSelect = (genre) => console.log(genre);

	return (
		<>
			<GlobalStyle />
			<Header />
			<>
				<GenreToggle genres={genres} onGenreSelected={genreSelect}></GenreToggle>
				<>Search Results</>
			</>
		</>
	);
}

export default App;
