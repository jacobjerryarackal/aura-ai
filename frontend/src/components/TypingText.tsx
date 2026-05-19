"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

export default function TypingText({
  text,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="leading-relaxed text-neutral-300">
      {displayed}
    </p>
  );
}