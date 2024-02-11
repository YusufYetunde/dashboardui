import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { iconsImgs } from "../../utils/images";
import { loansData } from "../../data/data";
import "./Loans.css";

const Loans = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Register the necessary plugins
    Chart.register(...registerables);

    const ctx = chartRef.current.getContext("2d");

    // Doughnut Chart configuration
    const config = {
      type: 'doughnut',
      data: {
        labels: ['Target Reached', 'Remaining'],
        datasets: [{
          data: [loansData.targetReached, loansData.savingsTarget - loansData.targetReached],
          backgroundColor: ['#fe0000', '#E0E0E0'],
        }],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: {
            display: false,
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
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Loans</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c7-content">
        <div className="progress-bar">
          <div className="percent">
            <canvas ref={chartRef}  />
            <div className="number">
              <h3>{loansData.percent}<span>%</span></h3>
            </div>
          </div>
        </div>
        <ul className="data-list">
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Savings Target</span>
            <span className="data-item-value">$ {loansData.savingsTarget}</span>
          </li>
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Target Reached</span>
            <span className="data-item-value">$ {loansData.targetReached}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Loans;
