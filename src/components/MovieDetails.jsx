import React from "react";
import movieData from "./movieData";
import { useParams, Link } from "react-router-dom";

// TODO: Import components/hooks from react-router-dom

function MovieDetails() {
	const { movieId } = useParams();
	const movie = movieData.find((m) => m.movieId === movieId);

	if (!movie) {
		return (
			<>
				<p>Movie with ID {movieId} not found.</p>
				<p>
					<Link to="/">All Movies</Link>
				</p>
			</>
		);
	}

	return (
		<>
			<h2>
				{movie.title} ({movie.year})
			</h2>
			<p>
				{movie ? movie.desc : `Movie with ID ${movieId} not found.`}
				<Link to={`https://www.imdb.com/title/${movie.movieId}/`}>
					More information
				</Link>
			</p>
			<p>Rated {movie.rating}.</p>
			<p>
				<Link to="/">All Movies</Link>
			</p>
		</>
	);
}

export default MovieDetails;
