import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";

const Report = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: reportData.map((data) => data.month),
        datasets: [
          {
            label: "Value 1",
            backgroundColor: createLinearGradient(ctx, "#fe0000"),
            data: reportData.map((data) => data.value1 || 0),
          },
          {
            label: "Value 2",
            backgroundColor: createLinearGradient(ctx, "#29221d"),
            data: reportData.map((data) => data.value2 || 0),
          },
        ],
      },
      options: {
        scales: {
            x: {
                grid:{
                    display: false,
                },
            },
          y: {
            beginAtZero: true,
            max: 100,
            tricks: {
                stepSize: 25,
            },
          },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

   // Function to create linear gradient
   const createLinearGradient = (ctx, color) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 320);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); 
    return gradient;
  };

  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Report</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c3-content">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Report;
