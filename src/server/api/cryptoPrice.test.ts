import { Prisma } from '@prisma/client';
import { expect, test, vi } from 'vitest';

import { prisma } from '../__mocks__/prisma';
import {
  createCurrentPriceEUR,
  createCurrentPriceGBP,
  createCurrentPriceUSD,
  getAllPriceEUR,
  getAllPriceGBP,
  getAllPriceUSD,
} from './cryptoPrice';

vi.mock('../prisma');

test('createCurrentPriceUSD should create a new currentPriceUSD record', async () => {
  const data = {
    rate: '1000.32',
    rateFloat: 1000.32,
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
  };
  prisma.currentPriceUSD.create.mockResolvedValue({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
  const result = await createCurrentPriceUSD(data);

  expect(result).toStrictEqual({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
});

test('createCurrentPriceGBP should create a new currentPriceUSD record', async () => {
  const data = {
    rate: '1000.32',
    rateFloat: 1000.32,
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
  };
  prisma.currentPriceGBP.create.mockResolvedValue({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
  const result = await createCurrentPriceGBP(data);

  expect(result).toStrictEqual({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
});

test('createCurrentPriceEUR should create a new currentPriceUSD record', async () => {
  const data = {
    rate: '1000.32',
    rateFloat: 1000.32,
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
  };
  prisma.currentPriceEUR.create.mockResolvedValue({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
  const result = await createCurrentPriceEUR(data);

  expect(result).toStrictEqual({
    rate: '1000.32',
    rateFloat: new Prisma.Decimal(1000.32),
    updatedAt: new Date('2024-05-01T23:26:23+00:00'),
    cryptoCurrencyId: 1,
    id: 1,
  });
});

test('getAllPriceUSD should return a list of currentPriceUSD records for a given cryptoCurrencyId', async () => {
  const id = 1;
  const expectedCryptoCurrencyList = [
    {
      rate: '1000.32',
      rateFloat: new Prisma.Decimal(1000.32),
      updatedAt: new Date('2024-05-01T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 1,
    },
    {
      rate: '2000.64',
      rateFloat: new Prisma.Decimal(2000.64),
      updatedAt: new Date('2024-05-02T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 2,
    },
  ];
  prisma.currentPriceUSD.findMany.mockResolvedValue(expectedCryptoCurrencyList);

  const result = await getAllPriceUSD(id);

  expect(result).toStrictEqual(expectedCryptoCurrencyList);
});

test('getAllPriceEUR should return a list of currentPriceEUR records for a given cryptoCurrencyId', async () => {
  const id = 1;
  const expectedCryptoCurrencyList = [
    {
      rate: '1000.32',
      rateFloat: new Prisma.Decimal(1000.32),
      updatedAt: new Date('2024-05-01T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 1,
    },
    {
      rate: '2000.64',
      rateFloat: new Prisma.Decimal(2000.64),
      updatedAt: new Date('2024-05-02T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 2,
    },
  ];
  prisma.currentPriceEUR.findMany.mockResolvedValue(expectedCryptoCurrencyList);

  const result = await getAllPriceEUR(id);

  expect(result).toStrictEqual(expectedCryptoCurrencyList);
});

test('getAllPriceGBP should return a list of currentPriceGBP records for a given cryptoCurrencyId', async () => {
  const id = 1;
  const expectedCryptoCurrencyList = [
    {
      rate: '1000.32',
      rateFloat: new Prisma.Decimal(1000.32),
      updatedAt: new Date('2024-05-01T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 1,
    },
    {
      rate: '2000.64',
      rateFloat: new Prisma.Decimal(2000.64),
      updatedAt: new Date('2024-05-02T23:26:23+00:00'),
      cryptoCurrencyId: 1,
      id: 2,
    },
  ];
  prisma.currentPriceGBP.findMany.mockResolvedValue(expectedCryptoCurrencyList);

  const result = await getAllPriceGBP(id);

  expect(result).toStrictEqual(expectedCryptoCurrencyList);
});
