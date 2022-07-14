import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";

import Header from "../src/Components/Header";
import SearchBody from "./Components/SearchBody";
import Footer from "./Components/Footer";

function App() {
	const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"]; // Hardcode for now.
	const [search, setSearch] = useState([]); // Empty, but will be API call

	const genreSelect = (genre) => console.log(genre); // Simple display of chosen genre
	const searchServer = (searchText) => console.log(searchText); // Simple display of chosen genre

	return (
		<>
			<GlobalStyle />
			<Header onSearch={searchServer} />
			<SearchBody
				genres={genres}
				onGenreSelected={genreSelect}
				searchResults={search}
			/>
			<Footer />
		</>
	);
}

export default App;
