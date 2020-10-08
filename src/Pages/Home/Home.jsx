import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import HomeImage from "../../assets/Image/to-do-list-not-css.svg";
import Note from "../../assets/Image/Notes.png";
import HomeMain from "./HomeMain";
import { getIsSignedIn } from "../../Redux/Users/selector";

const Home = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();

  return (
    <StyledHome>
      <StyledHomeTop>
        <img src={HomeImage} alt="top image" />
        <StyledTextArea>
          <h1>
            エンジニアを目指す人向けの<br></br>タスク管理サービス
          </h1>
          <p>
            エンジニアを目指す人の為の学習管理サービスです。<br></br>
            Will,Can,Mustを捉えて毎日のタスクを考えよう。<br></br>
            他の人の学習ロードマップを参考にしてみよう。
          </p>
          <StyledButtonArea>
            {!isSignedIn ? (
              <button onClick={() => dispatch(push("/login"))}>
                今すぐ始める
              </button>
            ) : (
              <button onClick={() => dispatch(push("/profile/create"))}>
                マイページへ
              </button>
            )}
          </StyledButtonArea>
          <img src={Note} alt="note" />
        </StyledTextArea>
      </StyledHomeTop>
      <HomeMain />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  text-align: center;
  width: 1300px;
  margin: 40px auto;
  @media screen and (max-width: 767px) {
    width: 375px;
    margin: 70px auto;
  }
`;

const StyledHomeTop = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  height: 900px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 700px;
  }
  h1 {
    font-size: 45px;
    font-weight: bold;
    color: #005e96;
    @media screen and (max-width: 767px) {
      font-size: 25px;
    }
  }
  img {
    height: 700px;
    margin-right: 30px;
    @media screen and (max-width: 767px) {
      width: 340px;
      height: 300px;
    }
  }
`;

const StyledTextArea = styled.div`
  margin-top: 50px;
  p {
    font-size: 18px;
    @media screen and (max-width: 767px) {
      font-size: 13px;
    }
  }
  img {
    position: absolute;
    opacity: 0.15;
    z-index: -3;
    top: 70px;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;

const StyledButtonArea = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 200px;
    height: 50px;
    background-color: #87ffff;
    cursor: pointer;
    box-shadow: 2px 4px 7px black;
    font-weight: bold;
    @media screen and (max-width: 767px) {
      width: 150px;
    }
    :hover {
      opacity: 0.7;
    }
  }
`;
