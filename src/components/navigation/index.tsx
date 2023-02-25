import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import Icon from "../icon";
import ICONS from "@/data/enum/icon";
import Link from "next/link";

type Tab = "messages" | "calls" | "contacts" | "new";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState<Tab>("messages");
  const tabs: Array<{ icon: ICONS; tab: Tab; link?: string }> = [
    { icon: ICONS.MESSAGE, tab: "messages", link: "/" },
    { icon: ICONS.PHONE, tab: "calls", link: "/" },
    { icon: ICONS.USERS, tab: "contacts", link: "/" },
    { icon: ICONS.PLUS, tab: "new" },
  ];

  const renderTabs = () => {
    return tabs.map((item, index) => {
      const { tab, icon, link } = item;

      let Component = link ? Link : "div";

      return (
        <Component
          //@ts-ignore
          href={link}
          key={index}
          className={classNames([
            styles.tab,
            { [styles.active]: activeTab === tab },
          ])}
          onClick={() => setActiveTab(tab)}
        >
          <Icon color={activeTab === tab ? "white" : "grey"} icon={icon} />
          <p>{tab}</p>
        </Component>
      );
    });
  };

  return <div className={styles.root}>{renderTabs()}</div>;
};

export default Navigation;
