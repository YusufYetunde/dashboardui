import React, { useState, useEffect } from "react";
import { iconsImgs } from "../../utils/images";
import { financialQuotes } from '../../data/data';

const Financial = () => {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * financialQuotes.length);
    setRandomQuote(financialQuotes[randomIndex]);
  };

  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">{randomQuote}</p>
      </div>
    </div>
  );
};

export default Financial;
