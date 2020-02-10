import React from 'react';
import './main.scss';

export default function InputBlock({ header, inputSymbol }) {
  const blockClass = 'input-block';
  let symbolBlock;
  if (inputSymbol === 'right') {
    symbolBlock = (
      <>
        <input type="number" />
        <span>%</span>
      </>
    );
  } else {
    symbolBlock = (
      <>
        <span>$</span>
        <input type="number" />
      </>
    );
  }
  return (
    <div className={blockClass}>
      <h2 className={`${blockClass}__header`}>{header}</h2>
      <div className={`${blockClass}__input`}>{symbolBlock}</div>
    </div>
  );
}
