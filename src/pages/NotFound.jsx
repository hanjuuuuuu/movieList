import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  margin-left: 100px;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const LinkToMain = styled.div`
  font-size: 18px;
  color: red;
  text-decoration: none;
`;

export default function NotFound() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  return (
    <NotFoundContainer>
      <Title>해당 페이지를 찾지 못했습니다.</Title>
      <SubTitle>
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </SubTitle>
      <LinkToMain onClick={goToMain}>메인 페이지로 이동</LinkToMain>
    </NotFoundContainer>
  );
}
