import { useEffect, useState, useRef } from "react";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / height);
      });
    };

    window.addEventListener("scroll", scroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: "left",
        backgroundColor: colors[color],
        height: 3,
      }}
    ></div>
  );
}

export default ScrollProgressBar;
