
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

      {/* Pulsing Sun */}
      <g>
        <circle
          cx="100"
          cy="50"
          r="20"
          className="fill-brandRed/60 dark:fill-brandRed/40 animate-pulse-slow"
          style={{ animationDuration: '4s' }}
        />
      </g>

      {/* Palm Trees */}
      <g className="animate-float" style={{ transformOrigin: 'center' }}>
        {/* Left Palm Tree */}
        <path
          d="M70 140c-5-10 10-40 10-40s10 30 5 40c-5 10-10 10-15 0z"
          className="fill-brandBlue/20 dark:fill-brandBlue/10"
        />

        {/* Right Palm Tree */}
        <path
          d="M130 140c5-10-10-40-10-40s-10 30-5 40c5 10 10 10 15 0z"
          className="fill-brandBlue/20 dark:fill-brandBlue/10"
        />

        {/* Ground/Beach */}
        <path
          d="M50 160h100c0 10-50 20-50 20s-50-10-50-20z"
          className="fill-marzipan dark:fill-marzipan/90"
        />
      </g>
    </svg>
  );
};

export default BeachScene;

