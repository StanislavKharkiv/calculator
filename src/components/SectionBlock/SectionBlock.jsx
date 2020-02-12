import React from 'react';

export default function SectionBlock({ header, valueArr, defaultValue, onChange, name }) {
  return (
    <div className="lease-block">
      <h2 className="lease-block__header">{header}</h2>
      <select value={defaultValue} onChange={onChange} name={name}>
        {valueArr.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
