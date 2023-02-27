import styles from "./styles.module.scss";
import ChatCard, { Props as ChatCardProps } from "@/components/chatCard";

type Props = {
  chatCards: Array<ChatCardProps>;
};

const ChatCardGroup = ({ chatCards }: Props) => {
  const renderCards = () => {
    chatCards.sort((chatA, chatB) => {
      return chatA.timeSinceLastReceivedMessage >
        chatB.timeSinceLastReceivedMessage
        ? -1
        : 1;
    });

    chatCards.sort((chatA) => {
      return chatA.isBookmarked ? -1 : 1;
    });

    return chatCards.map((card: ChatCardProps, index: number) => {
      return <ChatCard {...card} key={index} />;
    });
  };

  return <div className={styles.root}>{renderCards()}</div>;
};

export default ChatCardGroup;
