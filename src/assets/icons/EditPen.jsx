import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_303_3219"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={21}
      height={20}
    >
      <path
        d="M0.875 0H5.89881L15.8149 9.91607L16.9809 8.75L8.23095 0H20.875V20H0.875V0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_303_3219)">
      <path
        d="M16.9609 5.625L6.08594 16.5H4.375V14.7891L15.25 3.91406L16.9609 5.625Z"
        stroke="#191919"
        strokeWidth={2}
      />
    </g>
  </svg>
);
export default SVGComponent;
