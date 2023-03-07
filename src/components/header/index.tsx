import styles from "./styles.module.scss";
import IconButton from "../iconButton";
import ICONS from "@/data/enum/icon";
import SearchBar from "../searchbar";
import { useState, useEffect, Fragment } from "react";
import classNames from "classnames";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    if (!isSearchActive) {
      setSearchValue("");
      document.body.style.overflow = 'auto';
    }

    if (isSearchActive) document.body.style.overflow = "hidden";
  }, [isSearchActive]);

  return (
    <Fragment>
      <header className={styles.root}>
        <IconButton icon={ICONS.USER} color="grey" isRound />
        <h1 className={styles.title}>Chats</h1>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          setActive={setIsSearchActive}
          isActive={isSearchActive}
        />
      </header>
    </Fragment>
  );
};

export default Header;
