import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import SignIn from "./SignIn";
import Divider from "@material-ui/core/Divider";
import {
  twitterLogin,
  googleLogin,
  gitHubLogin,
} from "../Redux/Users/operations";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <StyledLogin>
      <div />
      <LayoutFlex>
        <LoginButtonArea>
          <h1>ログイン</h1>
          <GoogleLoginButton onClick={() => dispatch(googleLogin())}>
            <MailIcon style={{ marginRight: 10 }} />
            Googleでログイン
          </GoogleLoginButton>

          <TwitterLoginButton onClick={() => dispatch(twitterLogin())}>
            <TwitterIcon style={{ marginRight: 10 }} />
            Twitterでログイン
          </TwitterLoginButton>

          <GitHubLoginButton onClick={() => dispatch(gitHubLogin())}>
            <GitHubIcon style={{ marginRight: 10 }} />
            GitHubでログイン
          </GitHubLoginButton>
          <Divider />
          <SignIn />
        </LoginButtonArea>
      </LayoutFlex>
      <p onClick={() => dispatch(push("/signup"))}>
        メールアドレスで登録の方はこちら
      </p>
      <p onClick={() => dispatch(push("/password/reset"))}>
        パスワードをお忘れの方はこちら
      </p>
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled.section`
  margin: 70px auto;
  padding: 30px;
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
  }
  button:hover {
    opacity: 0.7;
  }
`;

const LayoutFlex = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;

const LoginButtonArea = styled.div`
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
  margin-bottom: 10px;
  @media screen and (max-width) {
    width: 400px;
  }
  h1 {
    font-size: 25px;
  }
`;

const GoogleLoginButton = styled.button`
  background-color: rgb(226 4 0);
  color: white;
`;

const TwitterLoginButton = styled.button`
  background-color: #00dcff;
  color: white;
`;
const GitHubLoginButton = styled.button`
  background-color: black;
  color: white;
`;
