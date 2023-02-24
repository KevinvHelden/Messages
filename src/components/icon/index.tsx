import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss";

export type Props = {
  icon: "search" | "user";
  color: "white" | "grey";
};

const Icon = ({ icon, color }: Props) => {
  const source = require(`../../../assets/svg/${icon}.svg`);

  return (
    <Image
      className={classNames(styles.root, { [styles[color]]: color })}
      src={source}
      alt="icon"
    />
  );
};

export default Icon;
