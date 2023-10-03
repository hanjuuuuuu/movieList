import "../../src/index.js";
import { useState } from "react";

function Movie({ title, average, poster, overview }) {
  const [isOverview, setisOverview] = useState(false);

  const handleOnMouse = () => {
    setisOverview(true);
  };

  const handleOffMouse = () => {
    setisOverview(false);
  };

  return (
    <div
      className="movie"
      onMouseEnter={handleOnMouse}
      onMouseLeave={handleOffMouse}>
      <div className="movie-container">
        <img className="poster" src={poster} alt={title} />

        {isOverview && (
          <div className="movie-modal">
            <div className="overview-overlay">
              <h3 className="movie-overview">{title}</h3>
              <h3 className="movie-overview">{overview}</h3>
            </div>
          </div>
        )}
        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <h2 className="movie-average">{average}</h2>
        </div>
      </div>
    </div>
  );
}

export default Movie;
