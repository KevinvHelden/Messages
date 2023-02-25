import styles from "./styles.module.scss";
import ChatCard, { Props as ChatCardProps } from "@/components/chatCard";

type Props = {
  title?: string;
  chatCards: Array<ChatCardProps>;
};

const ChatCardGroup = ({ title, chatCards }: Props) => {
  const renderCards = () => {
    return chatCards.map((card: ChatCardProps, index: number) => {
      return <ChatCard {...card} key={index} />;
    });
  };

  return (
    <div className={styles.root}>
      {title && <h6 className={styles.title}>{title}</h6>}
      {renderCards()}
    </div>
  );
};

export default ChatCardGroup;
