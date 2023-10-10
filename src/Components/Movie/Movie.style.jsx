import styled from "styled-components";

export const Poster = styled.img`
  width: 300px;
`;

export const MovieModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 43, 43, 0.7);
  display: flex;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
`;

export const MovieTitle = styled.h2`
  background-color: transparent;
  color: #f9f9f9;
  width: 250px;
  margin-left: 15px;
`;

export const MovieAverage = styled.h2`
  background-color: #2c2b66;
  color: rgb(183, 180, 180);
  margin-right: 15px;
`;

export const MovieOverview = styled.h3`
  background-color: transparent;
  color: #f9f9f9;
`;

export const OverviewOverlay = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 30px;

  &:hover ${MovieModal} {
    opacity: 1;
  }
`;
