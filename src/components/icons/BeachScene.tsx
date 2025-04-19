
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
      <path
        d="M100 190a90 90 0 1 0 0-180 90 90 0 0 0 0 180z"
        className="stroke-brandBlue/30 dark:stroke-brandBlue/20"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 140c0-5 40-80 40-80s5-10 10-10 10 5 10 10 40 75 40 80-20 20-50 20-50-15-50-20z"
        className="fill-brandBlue/20 dark:fill-brandBlue/10 animate-pulse-slow"
        style={{ animationDuration: '4s' }}
      />
      <path
        d="M140 70a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
        className="fill-brandRed animate-pulse-slow"
        style={{ animationDuration: '3s' }}
      />
      <path
        d="M155 80a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        className="fill-brandRed/80 animate-pulse-slow"
        style={{ animationDuration: '3.5s' }}
      />
      <g className="animate-float" style={{ transformOrigin: 'center' }}>
        <path
          d="M90 120c0-30 10-40 10-40s10 10 10 40h-20z"
          className="fill-marzipan dark:fill-marzipan/90"
        />
        <path
          d="M85 120c-5 0-15 5-15 10s30 10 60 0c0-5-10-10-15-10H85z"
          className="fill-marzipan dark:fill-marzipan/90"
        />
      </g>
    </svg>
  );
};

export default BeachScene;
