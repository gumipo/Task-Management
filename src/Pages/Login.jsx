import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <StyledLogin>
      <h1>ログイン</h1>
    </StyledLogin>
  );
};
export default Login;

const StyledLogin = styled.section`
  width: 800px;
  margin: 70px auto;
  text-align: center;
  padding-top: 30px;
  h1 {
    font-size: 30px;
  }
`;
