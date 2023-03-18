import React from 'react';
import './style.scss';

const Switch = ({
  checked,
  onClick
}) => {

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => onClick()} />
        <span className="slider round"></span>
      </label >
    </div >
  );
};

export default Switch;
