import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "</Hello World>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#222831] text-gray-300 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        <span className="inline-flex items-center">
          {text}
          <span className="animate-blink">|</span>
        </span>
      </div>
      <div className="w-[200px] h-[2px] bg-[#48A6A7] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#006A71] shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
