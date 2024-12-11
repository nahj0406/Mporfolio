import { useRef, useEffect, useState } from 'react';
import { render, createStars } from './nsky';

const NightSky = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: 0, // 초기 높이를 0으로 설정
  });

  useEffect(() => {
    const updateCanvasSize = () => {
      const newWidth = window.innerWidth;
      // window.innerWidth
      const newHeight = document.body.clientHeight; // body의 높이를 참조
      setCanvasSize({ width: newWidth, height: newHeight });
    };

    updateCanvasSize(); // 초기 렌더링 시 크기 설정
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const stars = createStars(canvasSize.width, canvasSize.height, 30);
    render(ctx, canvasSize.width, canvasSize.height, stars);
  }, [canvasSize]);

  return <canvas className='nightsky' ref={canvasRef} width="" height=""></canvas>;
};

export default NightSky;