import React from 'react';
import './main.scss';

export default function MonthButton({ months, active, onClick }) {
  const activeButton = active ? ' months-buttons__btn_active' : '';
  return (
    <button type="button" className={`months-buttons__btn${activeButton}`} onClick={onClick}>
      {months}
    </button>
  );
}
