import "./style.sass";

interface IProps {
  title: string;
  // style?: React.CSSProperties;
  className?: string;
}
export const LabelText = ({ title, className }: IProps) => {
  return <p className={`label-style ${className}`}>{title}</p>;
};
