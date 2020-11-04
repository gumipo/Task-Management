import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserIcon, getUserName } from "../.././Redux/Users/selector";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { storage } from "../../Firebase/index";

const CreateProfile = () => {
  const selector = useSelector((state) => state);
  const userName = getUserName(selector);
  const icon = getUserIcon(selector);

  const changeIcon = useCallback((event) => {
    const file = event.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });

    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
      .map((n) => S[n % S.length])
      .join("");

    const uploadRef = storage.ref("images").child(fileName);
    const uploadTask = uploadRef.put(blob);

    uploadTask.then(() => {
      //アップロードできたら
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newIcon = { id: fileName, path: downloadURL };
      });
    });
  }, []);

  return (
    <StyledSection>
      <StyledTite>
        <h1>
          {userName + "さんLograrへようこそ"}
          <br />
          プロフィールを作成しよう
        </h1>
      </StyledTite>
      <div className="p-grid__row">
        <UserImage>
          <img src={icon} alt="usericon" />
          <label>
            <StyledChangeIcon>
              <PhotoCameraIcon />
            </StyledChangeIcon>
            <input type="file" id="image" onChange={(e) => changeIcon(e)} />
          </label>
        </UserImage>

        <ProfileInputArea>
          <p>お名前</p>
          <input type="text" defaultValue={userName} />
          <h2>キータのアカウント</h2>
          <input placeholder="QiitaアカウントのUrl"></input>
          <h2>GitHubアカウント</h2>
          <input placeholder="gitHubアカウントUrl"></input>
        </ProfileInputArea>
      </div>
      <h2>自己紹介</h2>
      <textarea type="text" />
      <button> プロフィールを作成</button>
    </StyledSection>
  );
};

export default CreateProfile;

const StyledSection = styled.section`
  width: 1000px;
  height: 100vh;
  transform: translateX(150px);
  margin: 70px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20px;
  }
  input {
    width: 300px;
    display: block;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  button {
    margin-top: 30px;
    width: 150px;
    height: 50px;
    background-color: navy;
    color: white;
    border-radius: 5px;
    border: none;
  }
`;

const StyledTite = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const UserImage = styled.div`
  position: relative;
  img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
`;

const ProfileInputArea = styled.div`
  margin: 40px;
  input {
    margin-bottom: 15px;
  }
`;

const StyledChangeIcon = styled.div`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  :hover {
    opacity: 0.7;
  }
`;
