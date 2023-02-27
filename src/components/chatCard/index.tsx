import styles from "./styles.module.scss";
import Image from "next/image";
import Badge from "../badge";
import classNames from "classnames";
import { Fragment, useState } from "react";
import Icon from "../icon";
import ICONS from "@/data/enum/icon";
import Link from "next/link";
import getTimeInHumanLanguage from "@/util/getTimeInHumanLanguage";

export type Props = {
  image: string;
  variant?: "user" | "group";
  name: string;
  lastReceivedMessage: { user: string; message: string } | string;
  timeSinceLastReceivedMessage: number;
  amountOfUnreadMessages: number;
  isOnline: boolean;
  isBookmarked?: boolean;
};

const ChatCard = ({
  image,
  variant = "user",
  name,
  lastReceivedMessage,
  timeSinceLastReceivedMessage,
  amountOfUnreadMessages,
  isOnline,
  isBookmarked,
}: Props) => {
  const [imageHasError, setImageHasError] = useState(false);

  const formatLastMessage = () => {
    if (typeof lastReceivedMessage === "string") {
      return lastReceivedMessage;
    }

    return (
      <Fragment>
        <span className={styles.user}>{lastReceivedMessage.user}: </span>
        {lastReceivedMessage.message}
      </Fragment>
    );
  };

  return (
    <Link className={styles.root} href="/">
      <div
        className={classNames([
          styles["image-container"],
          { [styles.group]: variant === "group" },
        ])}
      >
        {imageHasError ? (
          <Icon
            color="grey"
            icon={variant === "group" ? ICONS.USERS : ICONS.USER}
          />
        ) : (
          <Image
            onError={() => setImageHasError(true)}
            className={styles["profile-image"]}
            src={image}
            alt="profile"
          />
        )}
        {isOnline && <div className={styles["online-marker"]} />}
      </div>
      <div
        className={classNames([
          styles.info,
          { [styles["no-messages"]]: amountOfUnreadMessages === 0 },
        ])}
      >
        <div className={styles["info-container"]}>
          <h6 className={styles.name}>{name}</h6>
          <p className={styles["time-since-last-received-message"]}>
            {getTimeInHumanLanguage(timeSinceLastReceivedMessage)}
          </p>
        </div>
        <div
          className={classNames([
            styles["secondary-info-container"],
            { [styles["no-messages"]]: amountOfUnreadMessages === 0 },
          ])}
        >
          <p
            className={classNames([
              styles["last-received-message"],
              { [styles.colored]: amountOfUnreadMessages > 0 },
            ])}
          >
            {formatLastMessage()}
          </p>
          <div className={styles.icons}>
            {isBookmarked && <Icon color="grey" icon={ICONS.BOOKMARK_FILLED} />}
            {amountOfUnreadMessages > 0 && (
              <Badge>{amountOfUnreadMessages}</Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
