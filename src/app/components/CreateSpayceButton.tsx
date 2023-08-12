import React, { useState, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import logoBlack from "../../../public/img/logo_black.json"

interface Props {
  onClick: () => void;
}

const CreateSpayceButton = ({ onClick }: Props) => {
  const [loop, setLoop] = useState(false);
  const lottieRef: React.MutableRefObject<LottieRefCurrentProps | null> = useRef(null);

  const handleComplete = () => {
    console.log('complete')
  }

  const handleMouseEnter = () => {
    lottieRef.current?.setSpeed(1);
    lottieRef.current?.play();
  }

  const handleMouseLeave = () => {
    lottieRef.current?.setSpeed(-1);
  }

  const handleAnimationEnd = () => {
    lottieRef.current?.goToAndStop(0)

  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-row h-[26px] w-[26px] md:h-fit md:w-full gap-1 py-3 pl-3 justify-start items-center rounded-xl font-semibold  hover:bg-green-400 active:bg-green-500 bg-green-300 transition-colors`}
      onClick={onClick}
    >
      <div className="h-[26px] md:h-8 md:w-8 translate-y-[1px] overflow-hidden"><Lottie onComplete={handleAnimationEnd} lottieRef={lottieRef} animationData={logoBlack} autoplay={false} loop={false} /></div>
      <div className="md:block hidden">New Spayce</div>
    </button>
  );
};

export default CreateSpayceButton;
