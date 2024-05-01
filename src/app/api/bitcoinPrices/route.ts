import { NextResponse } from 'next/server';

import { getCryptoCurrencyByChartName } from '@/server/api/cryptocurrency';

export const GET = async () => {
  try {
    const dbData = await getCryptoCurrencyByChartName('Bitcoin');

    if (dbData?.length === 0) {
      throw new Error('No cryptoCurrency found!');
    }

    return NextResponse.json(dbData, { status: 200 });
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
