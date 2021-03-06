import React from "react";

import "./label.scss";

export interface Props {
  children: React.ReactNode;
}

export const Label: React.FC<Props> = React.memo(({ children }) => {
  return <label className={`label`}>{children}</label>;
});
