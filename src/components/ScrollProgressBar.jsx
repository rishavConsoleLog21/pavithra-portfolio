import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 bg-pink-500"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgressBar;
