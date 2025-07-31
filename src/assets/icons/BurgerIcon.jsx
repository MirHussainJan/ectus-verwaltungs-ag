import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_309_8646)">
      <path
        d="M3 12.5H21"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6.5H21"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18.5H21"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_309_8646">
        <rect y={0.5} width={24} height={24} rx={12} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
