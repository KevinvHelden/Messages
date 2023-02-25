import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";

const Badge = ({ children }: PropsWithChildren) => {
  return <div className={styles.root}>{children}</div>;
};

export default Badge;
