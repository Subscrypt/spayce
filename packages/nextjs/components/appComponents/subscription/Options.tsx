import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onBlur: () => void;
}

const Options = ({ children, onBlur }: Props) => {
  return (
    <div className="flex flex-col gap-1 p-1 rounded-2xl bg-white stroke-gray-100 drop-shadow-xl" onBlur={onBlur}>
      {children}
    </div>
  );
};

export default Options;
