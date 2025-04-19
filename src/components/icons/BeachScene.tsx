
import React from 'react';

const BeachScene = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Floating Sun */}
      <circle
        cx="130"
        cy="130"
        r="60"
        className="fill-brandRed/60 dark:fill-brandRed/60 animate-float"
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  );
};

export default BeachScene;

