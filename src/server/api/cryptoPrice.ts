import { prisma } from '../prisma';

export interface ISetPriceData {
  rate: string;
  rateFloat: number;
  updatedAt: Date;
  cryptoCurrencyId: number;
}

export const createCurrentPriceUSD = async (data: ISetPriceData) => {
  try {
    const result = await prisma.currentPriceUSD.create({
      data,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const createCurrentPriceGBP = async (data: ISetPriceData) => {
  try {
    const result = await prisma.currentPriceGBP.create({
      data,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const createCurrentPriceEUR = async (data: ISetPriceData) => {
  try {
    const result = await prisma.currentPriceEUR.create({
      data,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const getAllPriceUSD = async (id: number) => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceUSD.findMany({
      where: {
        cryptoCurrencyId: id,
      },
    });
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};

export const getAllPriceEUR = async (id: number) => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceEUR.findMany({
      where: {
        cryptoCurrencyId: id,
      },
    });
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};
export const getAllPriceGPB = async (id: number) => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceGBP.findMany({
      where: {
        cryptoCurrencyId: id,
      },
    });
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};

export const getAllPriceUSDWithinTimeRange = async (
  id: number,
  value: number
) => {
  let timeRange: number | string = Date.now() - value * 60 * 1000;
  timeRange = new Date(timeRange).toISOString();

  try {
    const cryptoCurrencyList = await prisma.currentPriceUSD.findMany({
      where: {
        cryptoCurrencyId: id,
        updatedAt: {
          gte: new Date(timeRange),
        },
      },
    });
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};
