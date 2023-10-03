import "../../src/index.js";

function Movie({ title, average, poster }) {
  return (
    <div className="movie">
      <div className="movie-container">
        <img className="poster" src={poster} alt={title} />

        <div className="movie-info">
          <h2 className="movie-title">{title}</h2>
          <h2 className="movie-average">{average}</h2>
        </div>
      </div>
    </div>
  );
}

export default Movie;
