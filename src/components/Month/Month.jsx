import React from 'react';
import MonthButton from '../MonthButton/MonthButton';
import './main.scss';

const monthsList = [12, 24, 36, 48, 72, 84];

export default function Month({ months, onClick }) {
  const monthsButtons = monthsList.map(el => (
    <MonthButton months={el} active={months === el} onClick={onClick} key={el} />
  ));
  return (
    <div className="months">
      <h2 className="months__header">Terms (months)</h2>
      <div className="months__buttons">{monthsButtons}</div>
    </div>
  );
}
