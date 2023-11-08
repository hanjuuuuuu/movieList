import React from "react";
import Movie from "../Components/Movie";
import { movies } from "../MovieDummy";

const Movies = () => {
  return (
    <div>
      {movies.results.map((item) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        return (
          <Movie
            title={item.title}
            average={item.vote_average}
            overview={item.overview}
            poster={imageUrl}
            movieInfo={item}
          />
        );
      })}
    </div>
  );
};

export default Movies;
