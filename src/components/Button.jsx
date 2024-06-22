import React from "react";

const Button = (props) => {
  const { func, text } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded border-blue-400 border-solid border-2 bg-slate-950 blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
