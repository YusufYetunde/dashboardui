import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import './Chart.css';

const generateRandomData = () => {
  const data = [];
  let prev = 100;

  for (let i = 0; i < 1000; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
  }

  return data;
};

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Register the necessary plugins
    Chart.register(...registerables);

    const ctx = chartRef.current.getContext("2d");

    // Animation configuration
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / 1000;
    const previousY = (ctx) => (ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y);

    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    };

    // Chart configuration
    const config = {
      type: 'line',
      data: {
        datasets: [
          {
            borderColor: 'red',
            borderWidth: 1,
            radius: 0,
            data: generateRandomData(),
          },
          {
            borderColor: 'blue',
            borderWidth: 1,
            radius: 0,
            data: generateRandomData(),
          },
        ],
      },
      options: {
        animation,
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            type: 'linear'
          },
          y: {
            min: 0,
            max: 200,
          },
        },
      },
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="grid-common grid-chart">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Chart</h3>
      </div>
      <div className="grid-chart-content">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;
