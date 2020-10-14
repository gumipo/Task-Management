import React, { useRef } from "react";
import styled from "styled-components";

const DescriptionItem = ({ descriptions, setDescriptions }) => {
  const inputEl = useRef(null);
  const inputNumberEl = useRef(null);

  const addDescription = (text, time) => {
    if (text.length === 0 || time === "" || time < 0) {
      return;
    }
    const newDescriptions = [...descriptions, { text: text, time: time }];

    setDescriptions(newDescriptions);
    inputEl.current.value = "";
    inputNumberEl.current.value = "";
  };

  return (
    <StyledDescriptionItem>
      <input type="text" placeholder="学習内容" ref={inputEl} />
      <input type="number" placeholder="学習時間" ref={inputNumberEl} />
      <button
        onClick={() =>
          addDescription(inputEl.current.value, inputNumberEl.current.value)
        }
      >
        学習内容を登録
      </button>
    </StyledDescriptionItem>
  );
};

export default DescriptionItem;

const StyledDescriptionItem = styled.div`
  width: 500px;
  input {
    :first-child {
      width: 300px;
    }
  }
`;
