import { ReactNode } from "react";
import "./style.sass";

interface IProps {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
export const Title = ({ children, style, className }: IProps) => {
  return (
    <h1 className={`title_style ${className}`} style={style}>
      {children}
    </h1>
  );
};
