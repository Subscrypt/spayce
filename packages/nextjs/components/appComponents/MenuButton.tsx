import React from "react";

interface Props {
  icon?: string;
  text: string;
  onClick: () => void;
  isFocused?: boolean;
}

const MenuButton = ({ icon, text, onClick, isFocused }: Props) => {
  return (
    <button
      className={`flex flex-row gap-3 py-3 px-4 rounded-xl font-medium  hover:bg-gray-100 active:bg-gray-300 ${
        isFocused ? "bg-gray-200" : "bg-white"
      } focus:bg-gray-200 transition-colors`}
      onClick={onClick}
    >
      <span className="w-5 h-5 text-xl">{icon}</span> {text}
    </button>
  );
};

export default MenuButton;
