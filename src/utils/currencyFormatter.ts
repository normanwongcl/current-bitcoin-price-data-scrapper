export const currencyFormatter = (symbol: string, value: string) => {
  return `${symbol} ${parseFloat(value.replace(/,/g, '')).toFixed(2)}`;
};
