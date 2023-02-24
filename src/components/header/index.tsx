import styles from "./styles.module.scss";
import IconButton from "../iconButton";

const Header = () => {
  return (
    <div className={styles.root}>
      <IconButton icon="search" color="white" />
      <h1 className={styles.title}>Chats</h1>
      <IconButton icon="user" color="grey" isRound />
    </div>
  );
};

export default Header;
