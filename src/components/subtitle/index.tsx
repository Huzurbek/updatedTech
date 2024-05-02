import { ReactNode } from "react";
import "./style.sass";

interface IProps {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export const Subtitle = ({ children, style, className }: IProps) => {
  return (
    <h1 className={`subtitle_style ${className}`} style={style}>
      {children}
    </h1>
  );
};
