import React, { useRef } from "react";
import styled from "styled-components";

const DescriptionItem = ({ descriptions, setDescriptions }) => {
  const inputEl = useRef(null);
  const inputNumberEl = useRef(null);

  const addDescription = (text, time) => {
    if (text.length === 0 || time === "" || time < 0) {
      return;
    }
    const newDescriptions = [
      ...descriptions,
      { text: text, time: time, isCompleted: false },
    ];

    setDescriptions(newDescriptions);
    inputEl.current.value = "";
    inputNumberEl.current.value = 1;
  };

  return (
    <StyledDescriptionItem>
      <StyledInputArea>
        <input type="text" placeholder="学習内容" ref={inputEl} />
        <input
          type="number"
          placeholder="学習時間"
          min="0.5"
          step="0.5"
          defaultValue="1"
          ref={inputNumberEl}
        />

        <button
          className="btn u-background_green"
          onClick={() =>
            addDescription(inputEl.current.value, inputNumberEl.current.value)
          }
        >
          学習内容を登録
        </button>
      </StyledInputArea>
    </StyledDescriptionItem>
  );
};

export default DescriptionItem;

const StyledDescriptionItem = styled.div`
  width: 900px;
  margin: 0 auto;

  input {
    margin: 0 20px 0 20px;

    :first-child {
      width: 500px;
      font-size: 20px;
      @media screen and (max-width: 767px) {
        width: 350px;
      }
    }
    :nth-child(2) {
      width: 100px;
      font-size: 15px;
    }
  }
`;

const StyledInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 370px;
  }
`;
