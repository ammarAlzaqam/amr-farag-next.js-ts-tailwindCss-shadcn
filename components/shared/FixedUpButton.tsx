"use client";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function FixedUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateArrow, setAnimateArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setAnimateArrow(true);
    setTimeout(() => setAnimateArrow(false), 650); // نفس مدة الأنيميشن
  };

  return (
    <a href="#home" className="fixed bottom-4 right-4 z-100">
      <div
        className={`sm:hidden transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={handleClick}
          className="relative overflow-hidden cursor-pointer bg-primary-700 rounded-full p-3 hover:scale-110 transition-transform"
        >
          <FaAngleDoubleUp
            className={`text-primary-100 size-9 transition-transform ${
              animateArrow ? "animate-arrow-bounce" : ""
            }`}
          />
        </button>
      </div>
    </a>
  );
}
