import React from "react";

type SvgProps = {
  width: number;
  height: number;
  fill: string;
};

const ProfileIcon: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.74976 0C4.95483 0 3.49976 1.45507 3.49976 3.25V3.75C3.49976 5.54493 4.95483 7 6.74976 7H7.24976C9.04466 7 10.4998 5.54493 10.4998 3.75V3.25C10.4998 1.45507 9.04466 0 7.24976 0H6.74976ZM4.99976 3.25C4.99976 2.2835 5.78326 1.5 6.74976 1.5H7.24976C8.21626 1.5 8.99976 2.2835 8.99976 3.25V3.75C8.99976 4.7165 8.21626 5.5 7.24976 5.5H6.74976C5.78326 5.5 4.99976 4.7165 4.99976 3.75V3.25ZM1.49976 14.5V13.1709C2.31934 11.5377 3.99284 10.5 5.82921 10.5H8.17031C10.0067 10.5 11.6802 11.5377 12.4998 13.1709V14.5H1.49976ZM5.82921 9C3.35459 9 1.1058 10.4388 0.0687859 12.6857L-0.000244141 12.8353V13V15.25V16H0.749756H13.2498H13.9998V15.25V13V12.8353L13.9308 12.6857C12.8938 10.4388 10.645 9 8.17031 9H5.82921Z"
      fill={fill}
    />
  </svg>
);

export default ProfileIcon;
