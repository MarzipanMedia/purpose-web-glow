
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
      {/* Background circle with subtle stroke */}
      <path
        d="M100 190a90 90 0 1 0 0-180 90 90 0 0 0 0 180z"
        className="stroke-brandBlue/30 dark:stroke-brandBlue/20"
        strokeWidth="2"
        fill="none"
      />

      {/* Floating Sun */}
      <circle
        cx="100"
        cy="100"
        r="60"
        className="fill-brandRed/80 dark:fill-brandRed/70 animate-float"
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  );
};

export default BeachScene;

