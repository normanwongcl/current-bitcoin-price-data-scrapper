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
export const getAllBitCoinPriceUSD = async () => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceUSD.findMany();
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};

export const getAllBitCoinPriceEUR = async () => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceEUR.findMany();
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};
export const getAllBitCoinPriceGPB = async () => {
  try {
    const cryptoCurrencyList = await prisma.currentPriceGBP.findMany();
    return cryptoCurrencyList;
  } catch (error) {
    console.error(error);
  }
};
