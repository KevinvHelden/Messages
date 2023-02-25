import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss";
import ICONS from "@/data/enum/icon";

export type Props = {
  icon: ICONS;
  color?: "white" | "grey";
};

const Icon = ({ icon, color = "white" }: Props) => {
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
