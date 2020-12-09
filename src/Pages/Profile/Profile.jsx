import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <StyledSection>
      <p>まだプロフィールが作成されていません</p>
      <StyledButton onClick={() => dispatch(push("/profile/create"))}>
        プロフィールを作成する
      </StyledButton>
    </StyledSection>
  );
};
export default Profile;

const StyledSection = styled.section`
  width: 500px;
  margin: 70px auto 0 auto;
  display: flex;
  padding: 200px 0 200px 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translateX(150px);
`;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: gray;
  color: white;
  border-radius: 10px;
`;
