import React, { useEffect,useState } from "react";

import { PacmanLoader } from "react-spinners";
const loadingScreen = () => {
  
  const codingMessages = [
    "Compiling code...",
    "Hunting for bugs...",
    "Refactoring functions...",
    "Untangling spaghetti code...",
    "Feeding the code monkeys...",
    "Reticulating splines...",
  ];
  const [text, setText] = useState( codingMessages[Math.floor(Math.random() * codingMessages.length)]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setText(
        codingMessages[Math.floor(Math.random() * codingMessages.length)]
      );
    }, 2000);

    return () => {
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="flex w-full   flex-col items-center justify-center gap-20">
      <PacmanLoader color="rgba(255, 255, 255, 1)"/>
      <div className="font-mono text-lg mb-4 whitespace-pre-wrap">{text}</div>
    </div>
  );
};

export default loadingScreen;
