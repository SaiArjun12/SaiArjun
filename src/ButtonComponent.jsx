import React, { useState } from "react";

function Button() {
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isTrue ? 'red' : 'blue' }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}

export default Button;
