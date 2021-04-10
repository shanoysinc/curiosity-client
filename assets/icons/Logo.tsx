import React from "react";
import { Icon } from "../../types/Icon";

const Logo = ({ height, width }: Icon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="23.7526"
        cy="24.7273"
        rx="23.7526"
        ry="24.7273"
        fill="#2563EB"
      />
      <path
        d="M21.9558 14.6759C21.7607 14.9081 21.2924 15.8369 20.9802 16.7657L20.4339 18.4242L17.8973 18.6232C14.7753 18.8554 12.707 19.7179 11.068 21.5091C7.39972 25.5891 8.9607 31.3608 14.4241 33.9481C16.2583 34.8437 17.0387 35.0096 20.0436 35.1091C30.1119 35.5403 35.9265 31.1949 32.7656 25.6222C30.0339 20.8788 19.8485 20.8125 18.3656 25.5559C17.3119 28.8398 20.9802 31.0954 25.1948 29.7354C27.107 29.1052 27.5363 28.5413 26.7558 27.6788C26.2875 27.1149 26.0924 27.1149 24.9217 27.4798C22.1509 28.3091 20.3948 27.712 20.8631 26.0866C21.2144 24.9257 23.4778 24.1296 25.8583 24.2954C28.1607 24.4944 29.6046 25.3237 30.6192 27.0154C31.2436 28.1101 31.2826 28.3754 30.7753 29.4701C29.7607 31.7588 26.5607 32.9198 21.2924 32.9862C18.6778 33.0193 17.8583 32.8866 16.2583 32.1901C12.7851 30.6974 11.2241 28.1432 11.8875 25.0915C12.1997 23.7315 13.6826 22.1062 15.2436 21.4096C16.5705 20.8125 17.9363 20.7462 20.5509 21.0447L22.5412 21.2769L23.0485 19.1871C23.5168 17.0974 23.5168 17.0974 24.2192 17.8603C24.8436 18.4905 25.3119 18.5901 27.8485 18.5901C30.307 18.5901 30.8534 18.4905 31.4778 17.8935L32.2192 17.1969L32.4534 18.1257C32.6095 18.6564 32.7265 19.8837 32.7656 20.8788C32.8046 22.3383 32.9997 22.8359 33.9363 23.7647L35.107 24.8593L35.3802 23.3003C35.7314 21.4096 35.029 17.031 34.1314 15.4388C33.3509 14.0125 32.4924 13.9462 30.7363 15.273C29.6826 16.0359 29.0192 16.2681 27.7705 16.2681C26.4046 16.2681 25.9363 16.1023 25.1168 15.273C24.1022 14.2447 22.6583 13.9793 21.9558 14.6759Z"
        fill="white"
      />
      <path
        d="M24.2973 20.1485C23.3997 20.447 24.6095 21.2431 25.9363 21.2431L27.1461 21.21L26.2095 20.5797C25.2729 19.8831 25.1168 19.85 24.2973 20.1485Z"
        fill="white"
      />
      <path
        d="M29.6437 20.5797L28.7071 21.21L29.9168 21.2431C31.3607 21.2431 32.4144 20.447 31.3997 20.1153C30.5802 19.85 30.6583 19.8168 29.6437 20.5797Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
