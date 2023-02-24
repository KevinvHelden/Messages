import styles from "@/styles/pages/home/styles.module.scss";
import Header from "../components/header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}></main>
    </Fragment>
  );
}
