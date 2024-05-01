import { NextResponse } from 'next/server';

import {
  createCurrentPriceEUR,
  createCurrentPriceGBP,
  createCurrentPriceUSD,
} from '@/server/api/bitcoin';
import {
  addCryptoCurrencyToList,
  getCryptoCurrencyByChartName,
} from '@/server/api/cryptocurrency';
import { ICurrentPriceData } from '@/types/ICurrentPriceData';

const CRON_API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const GET = async () => {
  try {
    const res = await fetch(CRON_API_URL);

    const currentPriceData: ICurrentPriceData = await res.json();

    if (!currentPriceData) {
      throw new Error('No data found!');
    }

    const dbCryptoList = await getCryptoCurrencyByChartName(
      currentPriceData.chartName
    );

    let dataCreationResult;

    if (dbCryptoList?.length === 0) {
      dataCreationResult = await addCryptoCurrencyToList(
        currentPriceData.chartName
      );

      if (!dataCreationResult) {
        throw new Error(
          `${currentPriceData.chartName} failed to be added to CrytoCurrency Table`
        );
      }
    }
    const setCurrentPriceUSD = await createCurrentPriceUSD({
      rate: currentPriceData.bpi.USD.rate,
      rateFloat: Number(currentPriceData.bpi.USD.rate_float.toFixed(4)),
      updatedAt: new Date(currentPriceData.time.updatedISO),
      cryptoCurrencyId: dataCreationResult?.id ?? dbCryptoList?.[0]?.id ?? -1,
    });
    const setCurrentPriceEUR = await createCurrentPriceEUR({
      rate: currentPriceData.bpi.EUR.rate,
      rateFloat: Number(currentPriceData.bpi.EUR.rate_float.toFixed(4)),
      updatedAt: new Date(currentPriceData.time.updatedISO),
      cryptoCurrencyId: dataCreationResult?.id ?? dbCryptoList?.[0]?.id ?? -1,
    });

    const setCurrentPriceGBP = await createCurrentPriceGBP({
      rate: currentPriceData.bpi.GBP.rate,
      rateFloat: Number(currentPriceData.bpi.GBP.rate_float.toFixed(4)),
      updatedAt: new Date(currentPriceData.time.updatedISO),
      cryptoCurrencyId: dataCreationResult?.id ?? dbCryptoList?.[0]?.id ?? -1,
    });

    if (!setCurrentPriceUSD) {
      throw new Error('Failed to add current USD price data to the database');
    }
    if (!setCurrentPriceEUR) {
      throw new Error('Failed to add current EUR price data to the database');
    }
    if (!setCurrentPriceGBP) {
      throw new Error('Failed to add current GBP price data to the database');
    }
    return NextResponse.json({ ...currentPriceData }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
};
