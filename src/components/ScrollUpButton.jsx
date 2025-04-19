import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#006A71] text-white p-3 rounded-full shadow-lg hover:bg-[#48A6A7] transition-all z-50"
      >
        <ChevronUpIcon className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollUpButton;
