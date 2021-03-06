import React, { useRef, useEffect, useState } from "react";
import "./BoundedLabel.scss";
import sizeMe from "react-sizeme";

// sizeme handles the size prop.
// set it manually to override (faster but not dynamic)

export interface Props {
  children: React.ReactNode;

  size: {
    width: number;
    height: number;
  };
  minX: number;
  maxX: number;
  centerX: number;
  className?: string;
}

const BoundedLabel: React.FC<Props> = ({
  children,
  size,
  minX,
  maxX,
  centerX,
  className,
}) => {
  const { width, height } = size;

  return (
    <span
      className={`bounded-label ${className}`}
      style={{
        transform: `translateX(${Math.min(
          Math.max(minX, centerX - width / 2),
          maxX - width
        )}px)`,
      }}
      // style={
      //   centerX < (minX + maxX) / 2
      //     ? { float: "left", left: Math.max(minX, centerX - width / 2) }
      //     : { float: "right", right: Math.max(maxX - centerX - width / 2, 0) }
      // }
    >
      {children}
    </span>
  );
};

export default sizeMe({ monitorWidth: true })(BoundedLabel);
