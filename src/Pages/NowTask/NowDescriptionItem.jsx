import React from "react";

const NowDescriptionItem = ({ time, text, index }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{time}</p>
      <button>完了</button>
    </div>
  );
};

export default NowDescriptionItem;
