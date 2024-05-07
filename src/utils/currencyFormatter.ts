export const formatCurrencyNumber = (value: string) => {
  return parseFloat(value.replace(/,/g, '')).toFixed(2);
};

export const currencyFormatter = (symbol: string, value: string) => {
  return `${symbol} ${formatCurrencyNumber(value)}`;
};
