import React from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <h1>Movie Database</h1>

      <Routes>
        <Route path ="/" element={<MovieList />}/>
        <Route path ="/movie/:movieId" element={<MovieDetails />}/>
      </Routes>
    </>
  );
}

export default App;


