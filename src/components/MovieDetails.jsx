import React from "react";
import movieData from "./movieData";

// TODO: Import components/hooks from react-router-dom

function MovieDetails() {
   // TODO: Call useParams() here

   // TODO: Replace "tt0034583" with the movie ID parameter
   // find() returns undefined if the movieId cannot be found
   const movie = movieData.find(m => m.movieId === "tt0034583");
   
   return (
      <>        
         <h2>{movie.title} ({movie.year})</h2>
         
         { /* TODO: Show movie details or "not found" message */ }

         { /* TODO: Add Link to "/" */ }
      </>    
   );
}

export default MovieDetails;