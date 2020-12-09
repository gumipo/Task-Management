import React from "react";
import styled from "styled-components";
import NowDescriptionItem from "./NowDescriptionItem";

const NowTaskItem = ({ usertask, title, descriptions, id }) => {
  return (
    <StyledUserTask>
      <StyledNowTaskTitle>{title}</StyledNowTaskTitle>
      <StyledTaskWrap>未完了タスク</StyledTaskWrap>
      {descriptions.length > 0 &&
        descriptions.map(
          (description, index) =>
            !description.isCompleted && (
              <NowDescriptionItem
                title={title}
                usertask={usertask}
                descriptions={descriptions}
                time={description.time}
                text={description.text}
                id={id}
                index={index}
              />
            )
        )}
      <StyledTaskWrap>完了タスク</StyledTaskWrap>
      {descriptions.length > 0 &&
        descriptions.map(
          (description, index) =>
            description.isCompleted && (
              <NowDescriptionItem
                title={title}
                usertask={usertask}
                descriptions={descriptions}
                time={description.time}
                text={description.text}
                index={index}
                id={id}
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

const StyledTaskWrap = styled.div`
  text-align: center;
`;
