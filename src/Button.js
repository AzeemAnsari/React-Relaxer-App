import React from 'react';

const Button = ({ toggle, startNow, stopFunction }) => {
  return toggle ? (
    <button type="button" className="btn_reset btn" onClick={stopFunction}>
      Stop
    </button>
  ) : (
    <button type="button" className="btn_start btn" onClick={startNow}>
      Start Now
    </button>
  );
};

export default Button;
