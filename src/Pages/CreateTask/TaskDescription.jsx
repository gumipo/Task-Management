import React, { useState, useRef } from "react";
import styled from "styled-components";

const TaskDescription = ({
  text,
  time,
  index,
  descriptionEdit,
  removeDescription,
}) => {
  const inputEl = useRef(null);
  const inputNumberEl = useRef(null);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <StyledTaskDescription>
      {!isEdit ? (
        <DescriptionArea>
          <p>{text}</p>
          <p>{time + "h"}</p>
          <button onClick={() => setIsEdit(!isEdit)}>編集する</button>
          <button onClick={() => removeDescription(index)}>削除する</button>
        </DescriptionArea>
      ) : (
        <StyledEditDescription>
          <input
            type="text"
            defaultValue={text}
            autoFocus={true}
            ref={inputEl}
          />
          <input
            type="number"
            defaultValue={time}
            min="0.5"
            step="0.5"
            ref={inputNumberEl}
          />
          <button
            onClick={() => {
              descriptionEdit(
                index,
                inputEl.current.value,
                inputNumberEl.current.value
              );
              setIsEdit(false);
            }}
          >
            変更する
          </button>
        </StyledEditDescription>
      )}
    </StyledTaskDescription>
  );
};

export default TaskDescription;

const StyledTaskDescription = styled.div`
  width: 950px;
  margin: 40px auto;

  p {
    font-size: 30px;
    border-radius: 10px;
    height: 50px;
    margin: 0 5px 0 5px;

    :first-child {
      width: 600px;
      background-color: pink;
    }
    :nth-child(2) {
      background-color: #2cecec;
      width: 100px;
    }
  }
`;

const DescriptionArea = styled.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
  button {
    width: 100px;
    height: 100%;
    border-radius: 15px;
    outline: none;
    border: none;
    margin: 0 5px 0 5px;
    :nth-child(3) {
      background-color: #333;
      color: white;
    }
    :nth-child(4) {
      background-color: red;
      color: white;
    }
  }
`;

const StyledEditDescription = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  input {
    margin: 0 20px 0 20px;
    font-size: 20px;
    :nth-child(1) {
      width: 500px;
    }
    :nth-child(2) {
      width: 100px;
    }
  }
  button {
    width: 150px;
    background-color: #333;
    color: white;
    border-radius: 10px;
  }
`;
