import React from "react";
import styled from "styled-components";
import Question from "../../assets/Image/Questions-bro.png";

const HomeMain = () => {
  return (
    <StyledHomeMain>
      <img src={Question} alt="questionimage" />
      <h2>『 エンジニアになる為にどういう手順で勉強すればいいの？ 』</h2>
      <p>
        プログラミングを学習したいけど<br></br>
        何から始めたらいいかわからない...
      </p>
      <p>
        HTMLやCSSを学んだけど<br></br>
        この後なにを勉強すればいいのかわからない...
      </p>
      <p>
        フロントエンドエンジニアとバックエンドエンジニア<br></br>
        それぞれの学習手順が知りたい
      </p>
      <p>
        Lograrでは毎日の勉強した内容やこれまでの学習ロードマップを<br></br>
        ユーザー同士で共有し、あなたの学習をサポートします。
      </p>
    </StyledHomeMain>
  );
};
export default HomeMain;

const StyledHomeMain = styled.main`
  position: relative;
  z-index: -3;
  img {
    position: absolute;
    width: 300px;
    opacity: 0.7;
    left: 100px;
    top: 30px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 50px;
  }
  p {
    font-size: 20px;
    margin-bottom: 40px;

    :nth-child(6) {
      width: 1000px;
      margin: 0 auto;
      height: 200px;
      margin-top: 70px;
      font-size: 30px;
      background-color: #38ff91;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0px 1px 10px 0px black;
      font-weight: bold;
      color: #001977;
    }
  }
`;
