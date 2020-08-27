import React, { useRef, useEffect } from 'react';

interface Stock {
  ticker: string;
  price: number;
  percentDif: string;
}

function round(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
function rng(max: number, min: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function createStock(ticker: string, price: number, percentDif: number): Stock {
  let sign = rng(1, 3);
  console.log(sign);
  percentDif = rng(1, 200) / 100;
  percentDif = sign > 1 ? percentDif : -percentDif;
  console.log(percentDif);
  let _percentDif: string = '';
  if (percentDif < 0) {
    _percentDif = `-${round(price * (percentDif / 100))}$  ${percentDif}% 📉`;
  } else {
    _percentDif = `+${round(price * (percentDif / 100))}$  ${percentDif}% 📈`;
  }
  return { ticker, price, percentDif: _percentDif };
}

const stocks: Stock[] = [
  createStock('TSLA', 21521, -1.5),
  createStock('GOOGL', 30111, -1.5),
  createStock('MSFT', 30000, -1.5),
  createStock('APPL', 3000, 1.5),
  createStock('AMZN', 34220, 1.5),
  createStock('TCEHY', 2000, 1.5),
];

const draw = (
  context: CanvasRenderingContext2D,
  frameCount: number,
  width: number,
  height: number
) => {
  context.clearRect(0, 0, width, height);
  let x: number = frameCount;
  stocks.forEach(({ ticker, price, percentDif }, index) => {
    let str = `${ticker} ${price} ${percentDif}`;
    context.fillText(str, x % width, 15);
    x += str.length * 10;
  });

  context.fill();
};

export interface StocksProps {
  width: number;
  height: number;
}
export function Stocks({ width, height }: StocksProps) {
  const canvasRef: React.MutableRefObject<Nullable<HTMLCanvasElement>> = useRef(
    null
  );

  useEffect(() => {
    if (canvasRef.current) {
      const context: Nullable<CanvasRenderingContext2D> = canvasRef.current.getContext(
        '2d'
      );
      if (context) {
        let frameCount = 0;
        let animationFrameId = 0;

        context.fillStyle = '#000000';
        context.font = '15px Roboto';

        const render = () => {
          frameCount += 1.2;
          animationFrameId = window.requestAnimationFrame(render);
          draw(context, frameCount, width, height);
        };

        render();
        return () => {
          window.cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, [height, width]);

  return (
    <canvas className='Canvas' width={width} height={height} ref={canvasRef} />
  );
}
