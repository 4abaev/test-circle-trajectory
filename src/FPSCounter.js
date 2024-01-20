import React, { useState, useEffect } from 'react';

const FPSCounter = () => {
  const [fps, setFPS] = useState(0);

  useEffect(() => {
    let fpsCounter = 0;
    let lastTimestamp = performance.now();

    const updateFPS = (timestamp) => {
      const elapsed = timestamp - lastTimestamp;
      fpsCounter++;

      if (elapsed >= 1000) {
        const newFPS = (fpsCounter / elapsed) * 1000;
        setFPS(newFPS);
        fpsCounter = 0;
        lastTimestamp = timestamp;
      }

      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);

    return () => cancelAnimationFrame(updateFPS);
  }, []);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', fontSize: '16px', color: 'black' }}>
      FPS: {fps.toFixed(2)}
    </div>
  );
};

export default FPSCounter;
