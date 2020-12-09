import React, { useState, useCallback } from "react";
import TextInput from "../Components/UIkit/TextInput";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signIn } from "../Redux/Users/operations";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

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

  return (
    <EmailLoginArea>
      <h2>メールアドレスでログイン</h2>
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
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={iunputPassword}
      />
      <LoginButton onClick={() => dispatch(signIn(email, password))}>
        ログイン
      </LoginButton>
    </EmailLoginArea>
  );
};
export default SignIn;

const EmailLoginArea = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 330px;
  }
  h2 {
    font-size: 20px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }
`;

const LoginButton = styled.button`
  background-color: #32c34c;
  color: white;
  margin-top: 50px;
`;
