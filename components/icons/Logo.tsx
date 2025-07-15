import React from "react";

export const Logo = ({
  className,
}: {
  className?: string;
}): React.ReactNode => (
  <svg
    viewBox="0 0 100 40"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <text
      x="0"
      y="35"
      fontFamily="Manrope, sans-serif"
      fontSize="48"
      fontWeight="800"
      letterSpacing="-5"
    >
      X
      <tspan fontSize="40" dy="-2">
        s
      </tspan>
    </text>
  </svg>
);
