import { expect, test, vi } from 'vitest';

import { prisma } from '../__mocks__/prisma';
import {
  addCryptoCurrencyToList,
  getAllCryptoCurrencyList,
  getCryptoCurrencyByChartName,
} from './cryptocurrency';

vi.mock('../prisma');

test('addCryptoCurrencyToList should return the cryptocurrency created', async () => {
  const newCryptoCurrency = 'testCoin';
  prisma.cryptoCurrency.create.mockResolvedValue({
    chartName: newCryptoCurrency,
    id: 1,
  });
  const result = await addCryptoCurrencyToList(newCryptoCurrency);

  expect(result).toStrictEqual({ chartName: newCryptoCurrency, id: 1 });
});

test('getAllCryptoCurrencyList should return the list of all cryptocurrencies', async () => {
  const mockCryptoCurrencyList = [
    { chartName: 'Bitcoin', id: 1 },
    { chartName: 'Ethereum', id: 2 },
    { chartName: 'Litecoin', id: 3 },
  ];
  prisma.cryptoCurrency.findMany.mockResolvedValue(mockCryptoCurrencyList);

  const result = await getAllCryptoCurrencyList();

  expect(result).toEqual(mockCryptoCurrencyList);
});

test('getCryptoCurrencyByChartName should return the list of cryptocurrencies with the given chart name', async () => {
  const chartName = 'Bitcoin';

  const mockCryptoCurrency = { chartName: 'Bitcoin', id: 1 };
  prisma.cryptoCurrency.findFirst.mockResolvedValue(mockCryptoCurrency);

  const result = await getCryptoCurrencyByChartName(chartName);

  expect(result).toEqual({ chartName: 'Bitcoin', id: 1 });
});

test('getAllCryptoCurrencyList should handle errors', async () => {
  const errorMessage = 'Failed to fetch cryptocurrency list';
  const consoleErrorSpy = vi.spyOn(console, 'error');
  prisma.cryptoCurrency.findMany.mockRejectedValue(new Error(errorMessage));

  const result = await getAllCryptoCurrencyList();

  expect(result).toBeUndefined();
  expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));
});

test('getCryptoCurrencyByChartName should handle errors', async () => {
  const chartName = 'Bitcoin';
  const errorMessage = 'Failed to fetch cryptocurrency list';
  const consoleErrorSpy = vi.spyOn(console, 'error');
  prisma.cryptoCurrency.findMany.mockRejectedValue(new Error(errorMessage));

  const result = await getCryptoCurrencyByChartName(chartName);

  expect(result).toBeUndefined();
  expect(consoleErrorSpy).toHaveBeenCalledWith(new Error(errorMessage));
});
