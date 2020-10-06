import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import logo from "../../assets/Image/Lograr-logo.png";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <StyledHeaderTitle onClick={() => dispatch(push("/"))}>
        Lograr
        <img src={logo} alt="lograr" />
      </StyledHeaderTitle>
      <StyledHeaderNav>
        <ul>
          <li onClick={() => dispatch(push("/login"))}>ログイン</li>
          <li>アカウント登録</li>
        </ul>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0px 3px 5px green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
`;

const StyledHeaderTitle = styled.h1`
  font-size: 50px;
  margin-left: 100px;
  font-family: "Secular One", sans-serif;
  cursor: pointer;

  img {
    height: 60px;
    width: 60px;
  }
`;

const StyledHeaderNav = styled.nav`
  width: 400px;
  margin-right: 100px;
  ul {
    display: flex;
    li {
      margin: 10px;
      padding: 5px;
      list-style: none;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #a0e64f;
      flex: 1;
      border-radius: 30px;
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }

      :nth-child(2) {
        background-color: #ff8e8e;
      }
    }
  }
`;
