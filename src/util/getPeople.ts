import { Props as User } from "@/components/chatCard";

const getPeople = (value: string, users: Array<User>): Array<User> => {
  if (value.length === 0) return [];

  return users.filter(({ name }) => {
    const wordsInName = name.toLowerCase().split(" ");

    return wordsInName.some((word) =>
      word.startsWith(value.toLocaleLowerCase())
    );
  });
};

export default getPeople;
