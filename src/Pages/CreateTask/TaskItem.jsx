import React from "react";
import styled from "styled-components";
import TaskDescription from "./TaskDescription";
import DescriptionItem from "./DescriptionItem";
import Divider from "@material-ui/core/Divider";

const TaskItem = ({ title, descriptions, setDescriptions }) => {
  const descriptionEdit = (index, text, time) => {
    const newDescriptions = descriptions;
    newDescriptions[index].text = text;
    newDescriptions[index].time = time;
    setDescriptions(() => [...newDescriptions]);
  };

  const removeDescription = (index) => {
    const newDescriptions = descriptions;
    newDescriptions.splice(index, 1);
    setDescriptions(() => [...newDescriptions]);
  };

  return (
    <StyledTaskItem>
      <StyledTaskTitle>{title}</StyledTaskTitle>
      <DescriptionItem
        descriptions={descriptions}
        setDescriptions={setDescriptions}
      />
      <div className="module-spacer--medium" />
      <Divider />
      {descriptions.length > 0 ? (
        descriptions.map((description, index) => (
          <TaskDescription
            descriptions={descriptions}
            setDescriptions={setDescriptions}
            key={index}
            text={description.text}
            time={description.time}
            index={index}
            descriptionEdit={descriptionEdit}
            removeDescription={removeDescription}
          />
        ))
      ) : (
        <div>
          <div className="module-spacer--extra-small" />
          <p>まだ学習内容が登録されていません</p>
        </div>
      )}
      <div className="module-spacer--medium" />
      <Divider />
    </StyledTaskItem>
  );
};
export default TaskItem;

const StyledTaskItem = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 370px;
  }
`;

const StyledTaskTitle = styled.h1`
  width: 500px;
  margin: 30px auto;
  border-radius: 25px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  background-color: navy;
  color: white;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;
