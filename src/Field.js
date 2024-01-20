import React, { useRef, useEffect } from 'react';

function Field({ speed }) {
  const squareRef = useRef(null);
  const pointRef = useRef(null);

  useEffect(() => {
    let fps = 60;
    let fpsCounter = 0;
    let lastTimestamp = performance.now();

    const updateFPS = (timestamp) => {
      const elapsed = timestamp - lastTimestamp;
      fpsCounter++;

      if (elapsed >= 1000) {
        const newFPS = (fpsCounter / elapsed) * 1000;
        fps = newFPS;
        fpsCounter = 0;
        lastTimestamp = timestamp;
      }

      requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);



    const square = squareRef.current;
    const point = pointRef.current;

    let angle = 0;
    const radius = 110; // Радиус вращения

    function animate() {
      // Получаем ширину и высоту квадрата
      const squareWidth = square.offsetWidth;
      const squareHeight = square.offsetHeight;

      // Вычисляем новые координаты квадрата
      const x = point.offsetLeft + radius * Math.cos(angle) - squareWidth / 2;
      const y = point.offsetTop + radius * Math.sin(angle) - squareHeight / 2;

      // Устанавливаем новые координаты квадрата
      square.style.left = `${x}px`;
      square.style.top = `${y}px`;

      // Увеличиваем угол для следующего кадра
      angle += (speed / fps) * (Math.PI / 180);

      // Запускаем следующий кадр
      requestAnimationFrame(animate);
    }

    // Начинаем анимацию
    animate();
  }, [speed]);

  return (
    <div className="Field">
      <div ref={squareRef} className="Square" />
      <div ref={pointRef} className="Point" />
    </div>
  );
}

export default Field;
