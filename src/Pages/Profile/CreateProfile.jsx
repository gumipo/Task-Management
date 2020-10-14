import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserIcon, getUserName } from "../.././Redux/Users/selector";
import CheckBox from "./CheckBox";

const jobList = ["フロントエンドエンジニア", "バックエンドエンジニア"];
const flontCheckList = [
  "HTML",
  "CSS",
  "Sass",
  "javascript",
  "vue.js",
  "Nuxt.ja",
  "React",
  "Next.js",
];
const backCheckList = [
  "Ruby",
  "Ruby on Rails",
  "PHP",
  "Laravel",
  "Python",
  "Django",
];

const CreateProfile = () => {
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const icon = getUserIcon(selector);

  const [jobCheckedItems, setJobCheckedItems] = useState({});

  const handleChange = (e) => {
    setJobCheckedItems({
      ...jobCheckedItems,
      [e.target.id]: e.target.checked,
    });
    console.log(jobCheckedItems);
  };

  const dataSendBtn = (e) => {
    e.preventDefault();
    const dataPushArray = Object.entries(jobCheckedItems).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
    console.log(dataPushArray);
  };

  return (
    <StyledSection>
      <h1>{userName + "さんLograrへようこそ"}</h1>
      <h1>まずプロフィールを作成しよう</h1>
      <img src={icon} alt="usericon" />
      <p>お名前</p>
      <input defaultValue={userName} />
      <h2>希望の職種</h2>
      <form>
        {jobList.map((item, index) => {
          index = index + 1;
          return (
            <label htmlFor={`id_${index}`} key={`key_${index}`}>
              {item}
              <CheckBox
                id={`id_${index}`}
                value={item}
                onChange={handleChange}
                checked={jobCheckedItems[item.id]}
              />
            </label>
          );
        })}
      </form>

      <h2>学習してきた言語</h2>

      <h2>現在学習中の言語</h2>

      <h2>その他</h2>

      <h2>これまでの成果物</h2>

      <h2>キータのアカウント</h2>
      <input placeholder="QiitaアカウントのUrl"></input>
      <h2>GitHubアカウント</h2>
      <input placeholder="gitHubアカウントUrl"></input>

      <button onClick={dataSendBtn}> プロフィールを作成</button>
    </StyledSection>
  );
};

export default CreateProfile;

const StyledSection = styled.section`
  width: 700px;
  padding-top: 20px;
  margin: 70px 400px;

  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 75px;
  }
  h1 {
    font-size: 33px;
  }
  input {
    width: 300px;
    display: block;
  }
`;
