import {
  ICryptoHistoricalPrice,
  ICryptoPriceDetails,
} from '@/hooks/use-crypto-price-data';
import { currencyFormatter } from '@/utils/currencyFormatter';

export const AverageInfoGrid = (
  cryptoHistoricalPrice: ICryptoHistoricalPrice
) => {
  const movingAverage = (data: ICryptoPriceDetails[]) => {
    const total = data.reduce((acc: number, item: ICryptoPriceDetails) => {
      return acc + parseFloat(item?.rateFloat);
    }, 0);
    return total / data.length;
  };
  const movingAverageUSD =
    cryptoHistoricalPrice?.USD.length > 0
      ? currencyFormatter(
          '$',
          movingAverage(cryptoHistoricalPrice.USD).toString()
        )
      : 'No data';
  const movingAverageEUR =
    cryptoHistoricalPrice?.EUR.length > 0
      ? currencyFormatter(
          '€',
          movingAverage(cryptoHistoricalPrice.EUR).toString()
        )
      : 'No data';
  const movingAverageGBP =
    cryptoHistoricalPrice?.GBP.length > 0
      ? currencyFormatter(
          '£',
          movingAverage(cryptoHistoricalPrice.GBP).toString()
        )
      : 'No data';
  const movingAverageList = [
    { id: 1, currency: 'USD', average: movingAverageUSD },
    { id: 2, currency: 'EUR', average: movingAverageEUR },
    { id: 3, currency: 'GBP', average: movingAverageGBP },
  ];

  return (
    <>
      <h2 className="block pt-4 text-sm font-medium leading-6 text-gray-900">
        Average By Currency
      </h2>
      <dl className="grid grid-cols-3 gap-0.5 overflow-hidden rounded-2xl text-center">
        {movingAverageList.map((stat) => (
          <div key={stat.id} className="flex flex-col p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-600">
              {stat.currency}
            </dt>
            <dd className="order-first text-xl font-semibold  text-gray-800">
              {stat.average}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};
