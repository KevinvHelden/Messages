import getSecondsSinceDate from "./getSecondsSinceDate";

const getTimeInHumanLanguage = (epochTimestamp: number) => {
  const seconds = getSecondsSinceDate(epochTimestamp);

  // below minute
  if (seconds < 60) {
    return "Just now";
  }

  // below hour
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
  }

  // below day
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hr${hours !== 1 ? "s" : ""} ago`;
  }

  // below week
  if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return days === 1 ? "yesterday" : `${days} days ago}`;
  }

  // below month
  if (seconds < 2628000) {
    const weeks = Math.floor(seconds / 604800);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  }

  // below year
  if (seconds < 31540000000) {
    const months = Math.floor(seconds / 2628000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  return "> 1 year ago";
};

export default getTimeInHumanLanguage;
