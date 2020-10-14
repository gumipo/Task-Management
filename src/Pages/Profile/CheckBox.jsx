import React from "react";

const CheckBox = ({ id, value, checked, onChange }) => {
  return (
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );
};
export default CheckBox;
