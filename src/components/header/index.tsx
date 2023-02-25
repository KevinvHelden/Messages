import styles from "./styles.module.scss";
import IconButton from "../iconButton";
import ICONS from "@/data/enum/icon";

const Header = () => {
  return (
    <header className={styles.root}>
      <IconButton icon={ICONS.SEARCH} color="white" />
      <h1 className={styles.title}>Chats</h1>
      <IconButton icon={ICONS.USER} color="grey" isRound />
    </header>
  );
};

export default Header;
