import { DateTime } from "luxon";

export const formatDate = (date: string) => {
  const dateConverted = DateTime.fromISO(date);
  return dateConverted.toFormat("yyyy-MM-dd hh:mm a");
};
