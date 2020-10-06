import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import HomeImage from "../../assets/Image/to-do-list-not-css.svg";
import Note from "../../assets/Image/Notes.png";
import HomeMain from "./HomeMain";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <StyledHome>
      <StyledHomeTop>
        <img src={HomeImage} alt="top image" />
        <StyledTextArea>
          <h1>
            エンジニアを目指す人向けの<br></br>タスク管理サービス
          </h1>
          <p style={{ fontSize: 18 }}>
            エンジニアを目指す人の為の学習管理サービスです。<br></br>
            Will,Can,Mustを捉えて毎日のタスクを考えよう。<br></br>
            他の人の学習ロードマップを参考にしてみよう。
          </p>
          <StyledButtonArea>
            <button>今すぐ始める</button>
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
`;

const StyledHomeTop = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  height: 900px;
  h1 {
    font-size: 45px;
    font-weight: bold;
    color: #005e96;
  }
  img {
    height: 700px;
    margin-right: 30px;
  }
`;

const StyledTextArea = styled.div`
  margin-top: 50px;
  img {
    position: absolute;
    opacity: 0.15;
    z-index: -3;
    top: 70px;
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

    :hover {
      opacity: 0.7;
    }
    cursor: pointer;
    box-shadow: 2px 4px 7px black;
    font-weight: bold;
  }
`;
