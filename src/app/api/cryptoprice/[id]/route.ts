import { type NextRequest, NextResponse } from 'next/server';

import { getCryptoCurrencyByChartName } from '@/server/api/cryptocurrency';
import {
  getAllPriceEUR,
  getAllPriceGPB,
  getAllPriceUSD,
} from '@/server/api/cryptoPrice';

export const GET = async (req: NextRequest) => {
  try {
    const query = req.url?.split('/')[5];
    const [id, queryString] = query?.split('?') ?? [undefined, undefined];

    let timeRange;

    if (queryString) {
      timeRange = queryString.split('=')[1];
    }

    if (!id) {
      throw new Error('No id provided!');
    }

    const dbData = await getCryptoCurrencyByChartName(id);

    if (!dbData) {
      throw new Error('No cryptoCurrency found!');
    }

    const allPriceUSD = await getAllPriceUSD(dbData.id);
    const allPriceEUR = await getAllPriceEUR(dbData.id);
    const allPriceGPB = await getAllPriceGPB(dbData.id);

    if (timeRange) {
      const filteredPriceUSD =
        allPriceUSD?.filter(
          (price) =>
            new Date(price.updatedAt).getTime() >
            new Date().getTime() - parseInt(timeRange) * 60000
        ) ?? [];

      const filteredPriceEUR =
        allPriceEUR?.filter(
          (price) =>
            new Date(price.updatedAt).getTime() >
            new Date().getTime() - parseInt(timeRange) * 60000
        ) ?? [];

      const filteredPriceGPB =
        allPriceGPB?.filter(
          (price) =>
            new Date(price.updatedAt).getTime() >
            new Date().getTime() - parseInt(timeRange) * 60000
        ) ?? [];

      return NextResponse.json(
        {
          USD: [...(filteredPriceUSD || [])],
          EUR: [...(filteredPriceEUR || [])],
          GBP: [...(filteredPriceGPB || [])],
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        USD: [...(allPriceUSD || [])],
        EUR: [...(allPriceEUR || [])],
        GBP: [...(allPriceGPB || [])],
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    let errorMessage;
    try {
      errorMessage = JSON.parse((error as Error).message);
    } catch (parseError) {
      errorMessage = (error as Error).message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
