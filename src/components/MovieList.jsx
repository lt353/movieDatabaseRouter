import React from "react";
import movieData from "./movieData.js";

// TODO: Import components from react-router-dom

function MovieList() { 
   return (
      <>
         <table>      
            <tr>
               <th>Title</th>
               <th>Year</th>
               <th>Rating</th>
            </tr>
            {/* TODO: Add movies in movieData */}
            
         </table>       
      </>
   );
}

export default MovieList;