import React from "react";

type SvgProps = {
  width: number;
  height: number;
  fill: string;
};

const HomeIcon: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <g clipPath="url(#clip0_9_184)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4999 6.56062L7.99987 2.06062L3.49987 6.56062V13.5H5.99987V11C5.99987 9.89539 6.8953 8.99996 7.99987 8.99996C9.10444 8.99996 9.99986 9.89539 9.99986 11V13.5H12.4999V6.56062ZM13.7799 5.71933L8.70697 0.646409C8.31645 0.255886 7.68328 0.255883 7.29276 0.646409L2.21973 5.71944C2.2196 5.71957 2.21985 5.71932 2.21973 5.71944L0.469539 7.46963L-0.060791 7.99996L0.999873 9.06062L1.5302 8.53029L1.99987 8.06062V14.25V15H2.74987H5.99987H7.49987H8.49987H9.99986H13.2499H13.9999V14.25V8.06062L14.4696 8.53029L14.9999 9.06062L16.0606 7.99996L15.5302 7.46963L13.7799 5.71933C13.7801 5.71953 13.7797 5.71913 13.7799 5.71933ZM8.49987 11V13.5H7.49987V11C7.49987 10.7238 7.72372 10.5 7.99987 10.5C8.27601 10.5 8.49987 10.7238 8.49987 11Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_9_184">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(-0.000244141)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default HomeIcon;
