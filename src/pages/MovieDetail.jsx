import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const MovieDetail = () => {
  //url로 넘겨 받은 title
  const { title } = useParams();

  //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  const { state } = useLocation();

  console.log(title);
  console.log(state);

  return (
    <MovieDetailContainer>
      <MovieImage src={state.poster} alt={state.title} />
      <MovieTitle>{title}</MovieTitle>
    </MovieDetailContainer>
  );
};

export default MovieDetail;

const MovieDetailContainer = styled.div`
  margin: 20px;
  display: flex;
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieTitle = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;
