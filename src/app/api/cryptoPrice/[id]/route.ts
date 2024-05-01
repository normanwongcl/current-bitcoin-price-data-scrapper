import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { getCryptoCurrencyByChartName } from '@/server/api/cryptocurrency';
import {
  getAllPriceEUR,
  getAllPriceGPB,
  getAllPriceUSD,
} from '@/server/api/cryptoPrice';

export const GET = async (req: NextApiRequest) => {
  try {
    const id = req.url?.split('/')[5];

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
