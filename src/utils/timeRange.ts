export const tenMinutesAgo = (date: Date) => {
  return new Date(date.getTime() - 10 * 60 * 1000);
};

export const oneHoursAgo = (date: Date) => {
  return new Date(date.getTime() - 60 * 60 * 1000);
};

export const twoHoursAgo = (date: Date) => {
  return new Date(date.getTime() - 120 * 60 * 1000);
};
