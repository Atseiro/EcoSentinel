import React from "react";

type SvgProps = {
  width: number;
  height: number;
  fill: string;
};

const LogoutIcon: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.63902 12.5H5.66728V14H1.16511C0.641646 14 0.217285 13.5523 0.217285 13V1C0.217285 0.44771 0.641646 0 1.16511 0H5.66728V1.5H1.63902V12.5ZM11.0598 6.24999L9.19291 4.28031L8.69022 3.74998L9.69555 2.68932L10.1982 3.21965L13.1111 6.29288C13.4813 6.6834 13.4813 7.31657 13.1111 7.70709L10.1982 10.7803L9.69555 11.3106L8.69022 10.25L9.19291 9.7197L11.0598 7.74999H4.71946H4.00859V6.24999H4.71946H11.0598Z"
      fill={fill}
    />
  </svg>
);

export default LogoutIcon;
