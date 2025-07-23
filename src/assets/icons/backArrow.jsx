import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.0898 4.08001L8.56984 10.6C7.79984 11.37 7.79984 12.63 8.56984 13.4L15.0898 19.92"
      stroke="currentColor"
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
