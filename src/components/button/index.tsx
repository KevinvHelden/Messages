import styles from "./styles.module.scss";
import classNames from "classnames";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {
  return (
    <button onClick={onClick} className={classNames([styles.root, className])}>
      {children}
    </button>
  );
};

export default Button;
