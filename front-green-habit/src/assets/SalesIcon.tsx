import React from "react";

type SvgProps = {
  width: number;
  height: number;
  fill: string;
};

const SalesIcon: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99976 14.5C11.5897 14.5 14.4998 11.5899 14.4998 8C14.4998 4.41015 11.5897 1.5 7.99976 1.5C4.40991 1.5 1.49976 4.41015 1.49976 8C1.49976 11.5899 4.40991 14.5 7.99976 14.5ZM7.99976 16C12.4181 16 15.9998 12.4183 15.9998 8C15.9998 3.58172 12.4181 0 7.99976 0C3.58148 0 -0.000244141 3.58172 -0.000244141 8C-0.000244141 12.4183 3.58148 16 7.99976 16ZM8.62475 3.375V4V4.375H8.99976C10.1734 4.375 11.1248 5.3264 11.1248 6.5H9.87476C9.87476 6.01675 9.48301 5.625 8.99976 5.625H8.62475V7.375H8.99976C10.1734 7.375 11.1248 8.3264 11.1248 9.5C11.1248 10.6736 10.1734 11.625 8.99976 11.625H8.62475V12V12.625H7.37475V12V11.625H6.99976C5.82616 11.625 4.87476 10.6736 4.87476 9.5H6.12476C6.12476 9.98325 6.51651 10.375 6.99976 10.375H7.37475V8.625H6.99976C5.82616 8.625 4.87476 7.6736 4.87476 6.5C4.87476 5.3264 5.82616 4.375 6.99976 4.375H7.37475V4V3.375H8.62475ZM7.37475 5.625H6.99976C6.51651 5.625 6.12476 6.01675 6.12476 6.5C6.12476 6.98325 6.51651 7.375 6.99976 7.375H7.37475V5.625ZM8.62475 8.625V10.375H8.99976C9.48301 10.375 9.87476 9.98325 9.87476 9.5C9.87476 9.01675 9.48301 8.625 8.99976 8.625H8.62475Z"
      fill={fill}
    />
  </svg>
);

export default SalesIcon;
