import React, { useState } from "react";
import styled from "styled-components";

// hook 사용 전
// class LoginControl extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick = () => {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick = () => {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;

//useState 사용
const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>
          <Message>환영합니다!</Message>
        </>
      ) : (
        <>
          <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
          <Message>로그인 해주세요!</Message>
        </>
      )}
    </Container>
  );
};

export default LoginControl;

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

const Message = styled.p`
  font-size: 16px;
  margin-left: 16px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
