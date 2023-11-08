import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isOverview, setIsOverview] = useState(false);

  const handleOnMouse = () => {
    setIsOverview(true);
  };

  const handleOffMouse = () => {
    setIsOverview(false);
  };

  const handleMovieClick = () => {
    // 클릭된 영화 정보를 MovieDetail 페이지로 전달, 이동
    navigate(`/movie/${title}`, { state: { title, poster } });
  };

  return (
    <MovieContainer
      onMouseEnter={handleOnMouse}
      onMouseLeave={handleOffMouse}
      onClick={handleMovieClick}>
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
