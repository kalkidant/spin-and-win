import React, { useRef, useEffect, useState } from "react";

import EuropeanRoulette from "./container/europe/european_roulette";

function Appeuro() {
  const canvasRef = useRef(null);
  const canvasCtx = useRef(null);
  const [IsDrawing, setIsDrawing] = useState(false);
 

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.width = `${window.innerWidth}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 3;
    canvasCtx.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    canvasCtx.current.beginPath();
    canvasCtx.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    canvasCtx.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!IsDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    canvasCtx.current.lineTo(offsetX, offsetY);
    canvasCtx.current.stroke();
  };

  return (
    <div>
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />

    </div>
  );
}

export default EuropeanRoulette;
// export default App;
