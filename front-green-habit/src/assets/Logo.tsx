import React from "react";

type SvgProps = {
    width: number;
    height: number;
    fill: string;
}

const Logo: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 46 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.6016 9.35386C30.2496 9.38586 30.0256 9.64186 29.8016 9.86586C28.2976 11.1779 26.9536 12.6499 25.5776 14.0899C21.9296 17.9939 18.4096 21.9619 14.6656 25.7699C12.8416 27.6259 10.9536 29.3859 8.80963 30.8579C7.78563 31.5619 6.69763 32.2019 5.48163 32.4899C3.30563 33.0339 1.60963 32.1699 0.745632 30.1219C0.201632 28.8419 -0.0543678 27.4659 0.00963224 26.0579C-0.0223678 25.8339 0.0416323 25.6419 0.137632 25.4499C0.425632 25.5139 0.585632 25.7379 0.745632 25.9299C1.60963 26.7939 2.53763 26.8579 3.59363 26.3139C5.22563 25.4499 6.72963 24.4259 8.13763 23.2419C11.3696 20.5539 14.3456 17.6419 17.3536 14.7299C21.3536 10.8899 25.2896 6.95386 29.5456 3.36986C30.6976 2.37786 31.8816 1.48186 33.1616 0.649859C34.6336 -0.278141 36.0736 -0.182141 37.4176 0.745859C38.8256 1.67386 39.2416 3.11386 39.0496 4.74586C38.8576 6.24986 38.0896 7.52986 37.4176 8.80986C35.4336 12.5539 33.1296 16.1059 30.9216 19.7219C30.0256 21.2259 29.0656 22.6979 28.2656 24.2339C28.1056 24.5219 27.9456 24.8099 27.9456 25.1299C28.2016 25.2899 28.3936 25.1299 28.5536 25.0339C29.3216 24.5539 30.0256 24.0419 30.6656 23.4339C33.3536 21.1619 35.8816 18.6979 38.5376 16.3939C39.3056 15.7219 40.0416 15.0499 40.8736 14.5059C41.9296 13.8019 43.1136 13.6099 44.2976 14.1219C45.1936 14.4419 45.7376 15.3379 45.6096 16.2659C45.4816 17.9619 45.0656 19.5939 44.6816 21.2259C44.1376 23.5619 43.5296 25.8659 42.9856 28.2019C42.7616 29.1619 42.9216 29.4819 43.8176 29.9619C44.1376 30.0899 44.4256 30.2819 44.6816 30.4739C44.4256 30.9859 44.0416 31.4019 43.5936 31.7219C42.0576 32.7779 40.3296 33.0339 38.5376 32.6179C37.1616 32.2979 36.4896 31.1779 36.6816 29.8019C36.8736 28.3619 37.3856 26.9859 37.8016 25.5779C38.1856 24.3939 38.6336 23.2419 38.8256 21.9939C38.8576 21.8979 38.8576 21.8339 38.8576 21.7379C38.8896 21.2259 38.6336 21.0339 38.1856 21.2579C37.7376 21.4819 37.3216 21.7699 36.9376 22.0899C34.9856 23.7219 33.0976 25.3859 31.1456 27.0179C29.6096 28.2979 28.0416 29.5139 26.4416 30.6979C26.1856 30.8899 25.8976 31.0499 25.6096 31.2099C24.7136 31.7219 23.9136 31.4659 23.1456 30.9539C22.4416 30.4739 22.3136 29.7379 22.4096 28.9699C22.5376 27.7219 23.1136 26.6339 23.5936 25.5459C25.6096 20.9699 27.8496 16.4899 29.8016 11.8819C30.0896 11.2099 30.3456 10.5379 30.5696 9.83386C30.6656 9.67386 30.7296 9.54586 30.6016 9.35386Z"
      fill={fill}
    />
  </svg>
);

export default Logo;