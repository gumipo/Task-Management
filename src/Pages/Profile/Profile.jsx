import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <StyledSection>
      <p>まだプロフィールが作成されていません</p>
      <button onClick={() => dispatch(push("/profile/create"))}>
        プロフィールを作成する
      </button>
    </StyledSection>
  );
};
export default Profile;

const StyledSection = styled.section`
  margin: 100px 300px;
`;
