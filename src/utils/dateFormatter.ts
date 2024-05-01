export const dateFormatter = (date: Date) => {
  return new Date(date).toLocaleString('en-MY', {
    month: 'short',
    year: '2-digit',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};
