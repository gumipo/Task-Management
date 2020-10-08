import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserIcon, getUserId, getUserName } from "../Redux/Users/selector";

const CreateProfile = () => {
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const icon = getUserIcon(selector);
  const uid = getUserId(selector);

  const [name, setName] = useState([]);

  return (
    <StyledSection>
      <h1>{userName + "さんLograrへようこそ"}</h1>
      <h1>まずプロフィールを作成しよう</h1>
      <img src={icon} alt="usericon" />

      <p>お名前</p>
      <input defaultValue={userName} />
      <h2>希望の職種</h2>

      <p>フロントエンドエンジニア</p>
      <p>バックエンドエンジニア</p>
      <h2>習得済みの言語</h2>

      <h2>現在学習中の言語</h2>
    </StyledSection>
  );
};

export default CreateProfile;

const StyledSection = styled.section`
  width: 700px;
  padding-top: 20px;
  margin: 0 400px;

  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 75px;
  }
  h1 {
    font-size: 33px;
  }
  input {
    width: 300px;
    display: block;
  }
`;
