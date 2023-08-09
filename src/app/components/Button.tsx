import React, { useState } from "react";

interface Props {
  icon?: string;
  text?: string;
  onClick: () => void;
  isFocused?: boolean;
  hasIcon?: boolean;
}

const Button = ({ icon, text, onClick, isFocused, hasIcon }: Props) => {
  return (
    <button
      className={`flex flex-row gap-3 py-3 px-4 rounded-xl font-medium  hover:bg-gray-100 active:bg-gray-300 ${isFocused ? "bg-gray-200" : "bg-white"
        } focus:bg-gray-200 transition-colors ${hasIcon ? "justify-start" : "justify-center"
        }`}
      onClick={onClick}
    >
      {hasIcon ? <span className="w-5 h-5 text-xl">{icon}</span> : ""}
      <div className="">{text}</div>
    </button>
  );
};

export default Button;
