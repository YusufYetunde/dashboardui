import React, { useState } from "react";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
  const [checkedItems, setCheckedItems] = useState(Array(budget.length).fill(false));

  const handleToggleCheck = (index) => {
    if (index < 3) {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      setCheckedItems(newCheckedItems);
    }
  };

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Budget</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus" />
        </button>
      </div>
      <div className="grid-c-top text-silver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$ 100,000</span>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {budget.map((budgetItem, index) => (
            <div className="grid-item" key={budgetItem.id}>
              <div className="grid-item-l" onClick={() => handleToggleCheck(index)}>
                <div className="icon">
                  {checkedItems[index] ? (
                    <MdOutlineCheckBox />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank />
                  )}
                </div>
                <p className="text text-silver-v1">
                  {budgetItem.title} <span>{budgetItem.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {budgetItem.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
