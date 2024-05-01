import { Line } from 'react-chartjs-2';

import 'chart.js/auto';
import { ICryptoHistoricalPrice } from '@/hooks/use-crypto-price-data';
import { dateformatter } from '@/utils/dateformatter';

export const LineChart = (cryptoHistoricalPrice: ICryptoHistoricalPrice) => {
  const dataId = new Date().getTime();

  return (
    <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
      <Line
        datasetIdKey={dataId.toString()}
        data={{
          labels: [
            ...cryptoHistoricalPrice.USD.map((item) =>
              dateformatter(item.updatedAt)
            ),
          ],
          datasets: [
            {
              label: 'USD',
              data: [
                ...cryptoHistoricalPrice.USD.map((item) => item.rateFloat),
              ],
            },
          ],
        }}
      />
    </div>
  );
};
