import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewLoginControl = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>
        </>
      ) : (
        <>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
        </>
      )}
    </Container>
  );
};

export default NewLoginControl;

const LoginButton = styled.button`
  background-color: white;
  width: 80px;
  color: black;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 20px;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
