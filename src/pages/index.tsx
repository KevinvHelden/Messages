import ChatCardGroup from "@/components/chatCardGroup";
import styles from "./styles.module.scss";
import { Fragment } from "react";
import cards from "@/data/mockUsers.json";

export default function Home() {
  return (
    <Fragment>
      <main className={styles.root}>
        <ChatCardGroup title="Pinned" chatCards={cards} />
        <ChatCardGroup chatCards={[...cards, ...cards]} />
      </main>
    </Fragment>
  );
}
