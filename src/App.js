import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";

import Header from "../src/Components/Header";
import SearchBody from "./Components/SearchBody";
import Footer from "./Components/Footer";
import SearchMovies from "./Services/SearchMovies";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
	const [search, setSearch] = useState([]); // Empty, but will be API call

	const searchServer = async (searchTerm) => {
		const searchResults = await SearchMovies(searchTerm);
		setSearch(searchResults.data);
	};

	return (
		<>
			<GlobalStyle />
			<Header onSearch={searchServer} />
			<ErrorBoundary>
				<SearchBody searchResults={search} />
			</ErrorBoundary>
			<Footer />
		</>
	);
}

export default App;
