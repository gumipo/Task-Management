import React, { useState, useCallback } from "react";
import { TextInput } from "../Components/UIkit";
import { resetPassword } from "../Redux/Users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const iunputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <StyledReset>
      <StyledBox>
        <StyledInputArea>
          <h1>パスワードのリセット</h1>

          <TextInput
            fullWidth={true}
            label={"メールアドレス"}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={"email"}
            onChange={iunputEmail}
          />

          <button onClick={() => dispatch(resetPassword(email))}>
            送信する
          </button>
        </StyledInputArea>
      </StyledBox>
      <p onClick={() => dispatch(push("/login"))}>ログイン画面に戻る</p>
    </StyledReset>
  );
};
export default Reset;

const StyledReset = styled.section`
  margin: 70px auto;
  padding-top: 30px;
  text-align: center;
  p {
    width: 300px;
    margin: 15px auto;
    cursor: pointer;
    :hover {
      color: blue;
    }
  }
  @media screen and (max-width: 767px) {
    width: 350px;
  }

  button {
    margin: 0 auto;
    text-align: center;
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    box-shadow: 6px 7px 13px 0px black;
    cursor: pointer;
    outline: none;
    font-size: 17px;
    box-sizing: border-box;
    background-color: #32c34c;
    color: white;
  }
  button:hover {
    opacity: 0.7;
  }
`;

const StyledBox = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 2px grey;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 3px grey;
  background-color: white;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
  h1 {
    font-size: 25px;
  }
`;
const StyledInputArea = styled.div`
  width: 420px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    width: 330px;
  }
`;
