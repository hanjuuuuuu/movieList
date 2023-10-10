import React, { useState } from "react";
import {
  MovieContainer,
  Poster,
  MovieModal,
  OverviewOverlay,
  MovieTitle,
  MovieAverage,
  MovieOverview,
} from "./Movie.style";

function Movie({ title, average, poster, overview }) {
  const [isOverview, setIsOverview] = useState(false);

  const handleOnMouse = () => {
    setIsOverview(true);
  };

  const handleOffMouse = () => {
    setIsOverview(false);
  };

  return (
    <MovieContainer onMouseEnter={handleOnMouse} onMouseLeave={handleOffMouse}>
      <div className="movie-container">
        <Poster src={poster} alt={title} />

        {isOverview && (
          <MovieModal>
            <OverviewOverlay>
              <MovieTitle>{title}</MovieTitle>
              <MovieOverview>{overview}</MovieOverview>
            </OverviewOverlay>
          </MovieModal>
        )}
        <div className="movie-info">
          <MovieTitle>{title}</MovieTitle>
          <MovieAverage>{average}</MovieAverage>
        </div>
      </div>
    </MovieContainer>
  );
}

export default Movie;
