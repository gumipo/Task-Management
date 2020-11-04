import React from "react";
import styled from "styled-components";
import NowDescriptionItem from "./NowDescriptionItem";

const NowTaskItem = ({ title, descriptions }) => {
  return (
    <StyledUserTask>
      <StyledNowTaskTitle>{title}</StyledNowTaskTitle>
      <h2>未完了タスク</h2>
      {descriptions.length > 0 &&
        descriptions.map(
          (description, index) =>
            !description.isCompleted && (
              <NowDescriptionItem
                time={description.time}
                text={description.text}
                index={index}
              />
            )
        )}
      <h2>完了タスク</h2>
      {descriptions.length > 0 &&
        descriptions.map(
          (description, index) =>
            description.isCompleted && (
              <NowDescriptionItem
                time={description.time}
                text={description.text}
                index={index}
              />
            )
        )}
    </StyledUserTask>
  );
};

export default NowTaskItem;

const StyledUserTask = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const StyledNowTaskTitle = styled.h1`
  width: 500px;
  font-size: 30px;
  text-align: center;
  background-color: navy;
  color: white;
`;

const StyledTaskDescription = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;
