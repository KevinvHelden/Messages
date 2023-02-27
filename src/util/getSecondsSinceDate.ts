const getSecondsSinceDate = (epochTimestamp: number) => {
  const dateOfLastSentMessage = new Date(epochTimestamp * 1000);
  const today = new Date();

  const secondsSinceDate = Math.floor(
    (today.getTime() - dateOfLastSentMessage.getTime()) / 1000
  );
  return secondsSinceDate;
};

export default getSecondsSinceDate;
