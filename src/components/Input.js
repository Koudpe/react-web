import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div className="input-wrap">
      <input className="input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
