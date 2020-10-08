import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsSignedIn,
  getUserIcon,
  getUserName,
} from "../../Redux/Users/selector";
import { push } from "connected-react-router";
import styled from "styled-components";
import logo from "../../assets/Image/Lograr-logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const icon = getUserIcon(selector);
  const userName = getUserName(selector);

  return (
    <StyledHeader>
      <StyledHeaderTitle onClick={() => dispatch(push("/"))}>
        Lograr
        <img src={logo} alt="lograr" />
      </StyledHeaderTitle>
      {!isSignedIn ? (
        <StyledHeaderNav>
          <ul>
            <li onClick={() => dispatch(push("/login"))}>ログイン</li>
            <li onClick={() => dispatch(push("/signup"))}>アカウント登録</li>
          </ul>
        </StyledHeaderNav>
      ) : (
        <StyledHeaderUser>
          <img src={icon} alt="usericon" />
          <p>{userName}</p>
        </StyledHeaderUser>
      )}
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
  @media screen and (max-width: 767px) {
  }
`;

const StyledHeaderTitle = styled.h1`
  font-size: 50px;
  margin-left: 100px;
  font-family: "Secular One", sans-serif;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 30px;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  img {
    height: 60px;
    width: 60px;
    @media screen and (max-width: 767px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const StyledHeaderNav = styled.nav`
  width: 400px;
  margin-right: 100px;

  ul {
    display: flex;
    @media screen and (max-width: 767px) {
      margin-left: 60px;
    }

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
      @media screen and (max-width: 767px) {
        width: 80px;
        font-size: 10px;
      }

      :hover {
        opacity: 0.7;
      }

      :nth-child(2) {
        background-color: #ff8e8e;
      }
    }
  }
`;

const StyledHeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  img {
    width: 34px;
    height: 34px;
    border-radius: 17px;
  }
`;
