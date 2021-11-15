import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SnapShotIcon = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="30" cy="30" r="27" stroke="white" strokeWidth="6" />
    </Svg>
  );
};

const ViewDirectionIcon = () => {
  return (
    <Svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M25.5952 8.84032C23.3892 6.77476 20.5264 5.64248 17.4893 5.64516C12.0235 5.64996 7.30484 9.39764 6.00201 14.5963C5.90717 14.9747 5.57001 15.2419 5.17986 15.2419H1.1363C0.607208 15.2419 0.205272 14.7616 0.303145 14.2416C1.82995 6.13375 8.9485 0 17.5 0C22.1889 0 26.4469 1.84427 29.5888 4.84672L32.109 2.32651C33.1758 1.25965 35 2.01525 35 3.52406V12.9839C35 13.9192 34.2418 14.6774 33.3065 14.6774H23.8466C22.3378 14.6774 21.5822 12.8533 22.6491 11.7863L25.5952 8.84032ZM1.69355 20.3226H11.1534C12.6622 20.3226 13.4178 22.1467 12.3509 23.2137L9.40484 26.1597C11.6108 28.2254 14.4738 29.3577 17.511 29.3549C22.974 29.35 27.6945 25.6048 28.998 20.4039C29.0928 20.0254 29.43 19.7582 29.8201 19.7582H33.8638C34.3929 19.7582 34.7948 20.2385 34.6969 20.7585C33.1701 28.8663 26.0515 35 17.5 35C12.8111 35 8.55305 33.1557 5.41124 30.1533L2.89103 32.6735C1.82416 33.7404 0 32.9847 0 31.4759V22.0161C0 21.0808 0.758216 20.3226 1.69355 20.3226Z"
        fill="#FFFBFB"
      />
    </Svg>
  );
};

export { SnapShotIcon, ViewDirectionIcon };
