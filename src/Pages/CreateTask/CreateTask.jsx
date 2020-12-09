import React, { useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import { saveUserTask } from "../../Redux/Users/operations";
import { saveTask } from "../../Redux/Tasks/operations";
import Image from "../../assets/Image/static.png";
import { getUserTask } from "../../Redux/Users/selector";

const CreateTask = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const inputEl = useRef(null);

  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState([]);

  const totalTime = useMemo(() => {
    return descriptions.reduce(
      (sum, description) => (sum += parseFloat(description.time)),
      0
    );
  }, [descriptions]);

  const addTask = () => {
    const newTitle = inputEl.current.value;
    if (newTitle.length === 0) {
      return;
    }
    setTitle(newTitle);
    inputEl.current.value = "";
  };

  const resetTask = () => {
    setTitle("");
    setDescriptions([]);
  };
  return (
    <StyledSection>
      {title === "" ? (
        <div>
          <StyledTitle>
            <h1>学習タスクを作成しよう</h1>
            <h2>タスクの作成</h2>
          </StyledTitle>
          <input placeholder="タスクのテーマ  例: HTMLの学習" ref={inputEl} />
          <StyledButton onClick={() => addTask()}>タスクの作成</StyledButton>
          <StyledDiv>
            <div>
              <img src={Image} alt="task create" />
            </div>
            <div>
              <h2>
                タスクの作成で<span>困ったとき</span>
              </h2>
              <p>他の人のタスクを確認してみましょう</p>
              <button>みんなのタスクを確認する</button>
            </div>
          </StyledDiv>
        </div>
      ) : (
        <div>
          <TaskItem
            title={title}
            descriptions={descriptions}
            setDescriptions={setDescriptions}
          />
          <div className="module-spacer--medium" />

          {descriptions.length > 0 && (
            <StyledButtonArea>
              <p>{"トータル学習時間" + totalTime + "h"}</p>
              <button
                onClick={() => {
                  dispatch(saveUserTask(title, descriptions));
                  dispatch(saveTask(title, descriptions));
                }}
              >
                今日のタスクを登録する
              </button>

              <button onClick={() => resetTask()}>内容を破棄する</button>
            </StyledButtonArea>
          )}
        </div>
      )}
    </StyledSection>
  );
};
export default CreateTask;

const StyledSection = styled.section`
  width: 1000px;
  margin: 70px auto 0 auto;
  transform: translateX(150px);
  padding-top: 30px;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    width: 380px;
  }
  input {
    font-size: 20px;
    width: 500px;
    height: 60px;
    border-radius: 5px;
    outline: none;
    @media screen and (max-width: 767px) {
      width: 300px;
    }
  }
`;

const StyledTitle = styled.div`
  h1 {
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    color: navy;
    ::before,
    ::after {
      content: "";
      width: 60px;
      height: 5px;
      background-color: skyblue;
      @media screen and (max-width: 767px) {
        width: 30px;
      }
    }
    ::before {
      transform: rotate(60deg);
    }
    ::after {
      transform: rotate(-60deg);
    }
    @media screen and (max-width: 767px) {
      font-size: 22px;
      font-weight: bold;
    }
  }
  h2 {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    ::before,
    ::after {
      content: "";
      width: 100px;
      height: 1px;
      background-color: #111;
    }
    ::before {
      margin-right: 10px;
    }
    ::after {
      margin-left: 10px;
    }
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 20px;
  background-color: #00ff89;
  border-radius: 10px;
  outline: none;
  @media screen and (max-width: 767px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

const StyledDiv = styled.div`
  width: 900px;
  margin: 30px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    margin: 50px auto auto 0;
    flex-direction: column;
  }

  h2 {
    font-size: 25px;
    color: navy;
    font-weight: bold;
    span {
      text-emphasis: sesame #e3bf00;
      -webkit-text-emphasis: sesame #e3bf00;
    }
  }
  p {
    font-size: 16px;
  }
  button {
    margin-top: 30px;
    width: 200px;
    height: 50px;
    background-color: grey;
    border: none;
    color: white;
    border-radius: 5px;
  }
  img {
    width: 450px;
    margin-right: 30px;
    @media screen and (max-width: 767px) {
      width: 350px;
    }
  }
`;

const StyledButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
  p {
    font-size: 18px;
    color: #333;
  }
  button {
    width: 200px;
    margin: 5px 0 30px 0;
    :nth-child(2) {
      height: 50px;
      background-color: navy;
      border-radius: 10px;
      color: white;
    }
    :nth-child(3) {
      background-color: red;
      border-radius: 10px;
    }
  }
`;
