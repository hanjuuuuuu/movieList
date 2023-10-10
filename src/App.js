import Movie from "./Components/Movie/Movie";
import { movies } from "./MovieDummy";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.results.map((item) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        return (
          <Movie
            title={item.title}
            average={item.vote_average}
            overview={item.overview}
            poster={imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
