import React, { useState, useCallback } from "react";
import { TextInput } from "../Components/UIkit";
import { signUp } from "../Redux/Users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const iunputUserName = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );
  const iunputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const iunputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const iunputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <StyledSignUp>
      <StyledTextBox>
        <h1>アカウント登録</h1>
        <StyledTextInputArea>
          <TextInput
            fullWidth={true}
            label={"ユーザー名"}
            multiline={false}
            required={true}
            rows={1}
            value={username}
            type={"text"}
            onChange={iunputUserName}
          />
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
          <TextInput
            fullWidth={true}
            label={"パスワード(半角英数6文字以上)"}
            multiline={false}
            required={true}
            rows={1}
            value={password}
            type={"password"}
            onChange={iunputPassword}
          />
          <TextInput
            fullWidth={true}
            label={"パスワード（再確認）"}
            multiline={false}
            required={true}
            rows={1}
            value={confirmPassword}
            type={"password"}
            onChange={iunputConfirmPassword}
          />
        </StyledTextInputArea>
        <button
          onClick={() =>
            dispatch(signUp(username, email, password, confirmPassword))
          }
        >
          アカウント登録
        </button>
      </StyledTextBox>
      <p onClick={() => dispatch(push("/login"))}>
        SNSのアカウントをお持ちの方はこちら
      </p>
      <p onClick={() => dispatch(push("/password/reset"))}>
        パスワードをお忘れの方はこちら
      </p>
    </StyledSignUp>
  );
};
export default SignUp;

const StyledSignUp = styled.section`
  margin: 70px auto;
  padding-top: 30px;
  text-align: center;

  p {
    width: 320px;
    margin: 15px auto;
    cursor: pointer;
    :hover {
      color: blue;
    }
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

const StyledTextBox = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: solid 2px grey;
  border-radius: 5px;
  box-shadow: 0px 0px 17px 3px grey;
  background-color: white;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    width: 350px;
    height: 500px;
  }
  h1 {
    font-size: 25px;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
`;

const StyledTextInputArea = styled.div`
  width: 420px;
  margin: 0 auto;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 300px;
  }
`;
