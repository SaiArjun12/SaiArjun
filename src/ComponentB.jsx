
import React from 'react';

const ComponentB = ({ cendol, handleIncrement }) => {
  return (
    <div>
      <p>Value of cendol: {cendol}</p>
      <button onClick={handleIncrement}>Increment by 10</button>
    </div>
  );
};

export default ComponentB;
