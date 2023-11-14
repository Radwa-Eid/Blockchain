import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./backToTopBtn.css";
export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
}
