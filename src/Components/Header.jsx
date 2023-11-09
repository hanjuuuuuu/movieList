import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import LoginControl from "./LoginControl";
import NewLoginControl from "./NewLoginControl";

const Header = () => {
  return (
    <CustomHeader>
      <Nav>
        <LogoLink to="/">
          <LogoImage
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB 로고"
          />
        </LogoLink>
        <Menu>
          <MenuLink to="/movie">영화</MenuLink>
          <MenuLink to="/tv">TV 프로그램</MenuLink>
          <MenuLink to="/person">인물</MenuLink>
        </Menu>
        <NewLoginControl />
      </Nav>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled.div`
  background-color: #00394e;
  height: 60px;
  width: 100%;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  margin: 0;
  margin-left: 30px;
  padding-top: 20px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;

const LogoImage = styled.img`
  width: 154px;
  height: 20px;
  margin-right: 30px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;
const MenuLink = styled(Link)`
  color: #fff;
`;
