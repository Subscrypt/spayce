import React, { useState } from "react";
import Image from "next/image";

interface Props {
  onClick: () => void;
}

const OptionsButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 flex justify-center items-center rounded-xl hover:bg-gray-100 active:bg-gray-300 focus:bg-gray-200"
    >
      <Image priority src="/img/options.svg" height={4} width={16} alt="Options" />
    </button>
  );
};

export default OptionsButton;
