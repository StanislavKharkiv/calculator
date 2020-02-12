import React from 'react';
import './main.scss';

export default function InputBlock({ header, inputSymbol, value, name, onChange, onBlur }) {
  const blockClass = 'input-block';
  let symbolBlock;
  if (inputSymbol === 'right') {
    symbolBlock = (
      <>
        <input type="number" data-name={name} value={value} onChange={onChange} onBlur={onBlur} />
        <span>%</span>
      </>
    );
  } else if (inputSymbol === 'left') {
    symbolBlock = (
      <>
        <span>$</span>
        <input type="number" data-name={name} value={value} onChange={onChange} onBlur={onBlur} />
      </>
    );
  } else {
    symbolBlock = (
      <>
        <span>{inputSymbol}</span>
        <input type="number" data-name={name} value={value} onChange={onChange} onBlur={onBlur} />
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
