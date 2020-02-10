import React from 'react';
import './main.scss';

function numbersOfCreditScore(start, end, step) {
  const arrayLength = (end - start) / step;
  const scoreArr = [...Array(arrayLength)];
  return scoreArr.map((el, index) => {
    const firstNumber = start + step * index;
    const secondNumber = firstNumber + step;
    return `${firstNumber} - ${secondNumber}`;
  });
}

export default function CreditScore({ onClick, creditScore }) {
  const scoreArrData = numbersOfCreditScore(600, 900, 50);
  const scoreArrBlocks = scoreArrData.map(el => (
    <button
      className={`credit-score__btn ${creditScore === el ? 'credit-score__btn_active' : ''}`}
      type="button"
      onClick={onClick}
      key={el}
    >
      {el}
    </button>
  ));
  return (
    <div className="credit-score">
      <h2 className="credit-score__header">Credit Score</h2>
      <div className="credit-score__buttons">{scoreArrBlocks}</div>
    </div>
  );
}
