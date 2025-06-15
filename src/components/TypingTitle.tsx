
import { useEffect, useRef, useState } from "react";

const fullText = "Hi, I'm Abdulrahman, a Flutter Developer";

const TypingTitle = () => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((i) => {
        if (i >= fullText.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return i;
        }
        setDisplayed(fullText.slice(0, i + 1));
        return i + 1;
      });
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <h1
      className="text-3xl md:text-5xl font-bold glow-text font-mono transition-shadow duration-300"
      style={{ letterSpacing: "0.02em" }}
    >
      {displayed}
      <span className="text-neon-green animate-pulse" style={{ opacity: idx % 2 ? 1 : 0.6 }}>|</span>
    </h1>
  );
};

export default TypingTitle;
