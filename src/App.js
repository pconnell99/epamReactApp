import "./App.css";
import { IncrementValue } from "./IncrementValue";
import React from "react";
import SearchBar from "./SearchBar";
import GenreToggle from "./GenreToggle";

function App() {
	const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];
	return (
		<div className="App">
			{React.createElement("div", {}, "Hello World!")}
			<br />
			<IncrementValue />
			<br />
			<SearchBar />
			<br />
			<GenreToggle
				genres={genres}
				onGenreSelected={(genre) => console.log(genre)}
			/>
		</div>
	);
}

export default App;
