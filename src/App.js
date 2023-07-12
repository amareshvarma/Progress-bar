import React, { useRef } from "react";
import ProgressBar from "./Progress";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const totalTime = 10 * 1000;
  const interval = 1 * 1000;
  const progressMade = (interval / totalTime) * 100;
  const totalCycles = totalTime / interval;
  const timer = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (totalCycles <= cyclesCompleted.current) {
        clearInterval(timer.current);
        return;
      }
      setProgress((progress) => progress + progressMade);
      cyclesCompleted.current++;
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <>
      <ProgressBar progress={progress} />
    </>
  );
}
