import React from "react";
import { tv } from "../tvDummy";
import Movie from "../Components/Movie";
import styled from "styled-components";

const TVGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const TV = () => {
  return (
    <TVGrid>
      {tv.results.map((item) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        return (
          <Movie
            key={item.id}
            title={item.name}
            poster={imageUrl}
            average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </TVGrid>
  );
};

export default TV;
