import { Line } from 'react-chartjs-2';

import 'chart.js/auto';
import { ICryptoHistoricalPrice } from '@/hooks/use-crypto-price-data';
import { dateFormatter } from '@/utils/dateFormatter';

export const LineChart = (cryptoHistoricalPrice: ICryptoHistoricalPrice) => {
  const dataId = new Date().getTime();

  return (
    <Line
      datasetIdKey={dataId.toString()}
      data={{
        labels: [
          ...cryptoHistoricalPrice.USD.map((item) =>
            dateFormatter(item.updatedAt)
          ),
        ],
        datasets: [
          {
            label: 'USD',
            data: [...cryptoHistoricalPrice.USD.map((item) => item.rateFloat)],
          },
        ],
      }}
    />
  );
};
