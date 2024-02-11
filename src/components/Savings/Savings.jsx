import React, { useState } from "react";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";
import {initialSavings} from '../../data/data';

const Savings = () => {
  const [savings, setSavings] = useState(initialSavings);
  const [amountToAdd, setAmountToAdd] = useState("");

  const handleAmountInputChange = (e) => {
    setAmountToAdd(e.target.value);
  };

  const handleAddAmount = (id) => {
    const updatedSavings = savings.map((saving) => {
      if (saving.id === id) {
        const newAmountLeft = saving.amount_left - parseInt(amountToAdd, 10);
        const isTargetMet = newAmountLeft <= 0;
        const updatedSavingsAmount = saving.saving_amount + parseInt(amountToAdd, 10);

        return {
          ...saving,
          amount_left: isTargetMet ? 0 : newAmountLeft,
          isTargetMet: isTargetMet
        };
      }
      return saving;
    });

    setSavings(updatedSavings);
    setAmountToAdd("");
  };

  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => (
            <div className="grid-item" key={saving.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={saving.image} alt={saving.title} />
                  </div>
                  <p className="text text-silver-v1">{saving.title}</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">$ {saving.saving_amount}</span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">Date taken {saving.date_taken}</span>
                  <span className="grid-item-badge">Amount left $ {saving.amount_left}</span>
                </div>
                <div className="grid-item-progress">
                  <div
                    className={`grid-item-fill ${saving.isTargetMet ? 'target-met' : ''}`}
                    style={{
                      width: `${(saving.saving_amount - saving.amount_left) / saving.saving_amount * 100}%`
                    }}
                  ></div>
                </div>
              </div>
              <div className="grid-item-input">
                <input
                  type="text"
                  placeholder="Add to saving target"
                  value={amountToAdd}
                  onChange={handleAmountInputChange}
                  disabled={saving.isTargetMet}
                />
                <button onClick={() => handleAddAmount(saving.id)} disabled={saving.isTargetMet}>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
