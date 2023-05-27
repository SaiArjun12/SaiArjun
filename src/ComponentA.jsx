
import React, { useState } from 'react';
import ComponentB from './ComponentB';

const CompA = () => {
  const [cendol, setCendol] = useState(2);

  const handleIncrement = () => {
    setCendol(cendol + 10);
  };

  return (
    <div>
      <ComponentB cendol={cendol} handleIncrement={handleIncrement} />
    </div>
  );
};

export default CompA;
