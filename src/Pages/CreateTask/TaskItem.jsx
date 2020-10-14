import React, { useState, useRef } from "react";
import styled from "styled-components";
import TaskDescription from "./TaskDescription";
import DescriptionItem from "./DescriptionItem";

const TaskItem = ({ title, descriptions, setDescriptions }) => {
  console.log(descriptions);
  return (
    <StyledTaskItem>
      <StyledTaskTitle>{title}</StyledTaskTitle>
      <DescriptionItem
        descriptions={descriptions}
        setDescriptions={setDescriptions}
      />
      {descriptions.length > 0 &&
        descriptions.map((description, index) => (
          <TaskDescription
            key={index}
            text={description.text}
            time={description.time}
            index={index}
          />
        ))}
    </StyledTaskItem>
  );
};
export default TaskItem;

const StyledTaskItem = styled.div`
  width: 800px;
  margin: 0 auto;
  height: 600px;
  border: 2px dotted black;
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
`;
