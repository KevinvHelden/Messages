import styles from "./styles.module.scss";
import IconButton from "../iconButton";
import ICONS from "@/data/enum/icon";
import classNames from "classnames";
import { FormEvent, Fragment, useRef } from "react";
import Button from "../button";
import users from "@/data/mockUsers.json";
import ChatCard from "@/components/chatCard";
import getPeople from "@/util/getPeople";
import Icon from "../icon";

type Props = {
  onChange: (val: string) => void;
  setActive: (val: boolean) => void;
  isActive: boolean;
  value: string;
};

const SearchBar = ({ onChange, setActive, isActive, value }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const peopleResult = () => {
    const people = getPeople(value, users);

    if (people.length === 0) return;

    return (
      <Fragment>
        <h2 className={styles["search-result-title"]}>People</h2>
        {people.map((person, index) => {
          if (index > 2) return;

          return <ChatCard key={index} {...person} />;
        })}
        {people.length > 3 && (
          <Button className={styles["view-all-button"]}>
            View all <Icon color="grey" icon={ICONS.ARROW_RIGHT} />
          </Button>
        )}
      </Fragment>
    );
  };

  const handleButtonClick = () => {
    setActive(true);
    inputRef.current?.focus();
  };

  return (
    <Fragment>
      <div className={styles.root}>
        <div
          className={classNames([
            styles["input-container"],
            { [styles.active]: isActive },
          ])}
        >
          <input
            ref={inputRef}
            value={value}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              onChange(e.currentTarget.value)
            }
            className={styles.input}
            placeholder="Type to start searching"
          />
          <Button onClick={() => setActive(false)}>Cancel</Button>
        </div>

        <IconButton icon={ICONS.SEARCH} onClick={handleButtonClick} />
      </div>
      <div
        className={classNames([
          styles["search-result-container"],
          { [styles.active]: isActive },
          { [styles.dark]: value.length > 0 },
        ])}
      >
        {peopleResult()}
      </div>
    </Fragment>
  );
};

export default SearchBar;
