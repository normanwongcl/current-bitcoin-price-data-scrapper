import { prisma } from '../prisma';

export const addCryptoCurrencyToList = async (chartName: string) => {
  try {
    const result = await prisma.cryptoCurrency.create({
      data: {
        chartName,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCryptoCurrencyList = async () => {
  try {
    const cryptoCurrencyList = await prisma.cryptoCurrency.findMany();
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};

export const getCryptoCurrencyByChartName = async (chartName: string) => {
  try {
    const cryptoCurrencyList = await prisma.cryptoCurrency.findMany({
      where: {
        chartName,
      },
    });
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};
