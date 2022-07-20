/** Handler for searching a backend API for movies */
import { MockMovieData } from "./MockData";

export default function SearchMovies() {
	return new Promise((resolve, reject) => {
		resolve({ data: MockMovieData });
	});
}
