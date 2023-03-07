import styles from "./styles.module.scss";
import { Props as IconProps } from "../icon";
import Icon from "../icon";
import classNames from "classnames";

interface Props extends IconProps {
  isRound?: boolean;
  onClick?: () => void;
}

const IconButton = ({ icon, color, isRound = false, onClick }: Props) => {
  return (
    <button onClick={onClick} className={classNames(styles.root, { [styles.isRound]: isRound })}>
      <Icon icon={icon} color={color} />
    </button>
  );
};

export default IconButton;
