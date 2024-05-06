import { Table } from './Table';

import { ICryptoHistoricalPrice } from '@/hooks/use-crypto-price-data';
import { dateFormatter } from '@/utils/dateFormatter';
export const HistoricalListing = (
  cryptoHistoricalPrice: ICryptoHistoricalPrice
) => {
  const combinedArray =
    cryptoHistoricalPrice &&
    cryptoHistoricalPrice?.USD.map((currentItem, index) => ({
      USD: currentItem,
      GBP: cryptoHistoricalPrice.GBP[index],
      EUR: cryptoHistoricalPrice.EUR[index],
    }));
  return (
    <div className="rounded-lg bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="my-6 "></div>
      <Table tableHeadingList={['Updated At', 'USD', 'EUR', 'GBP']}>
        {combinedArray &&
          combinedArray?.map((item) => (
            <tr key={item.USD.id}>
              <td className="table-column-data-default">
                {dateFormatter(item.USD.updatedAt)}
              </td>
              <td className="table-column-data-default">{item.USD.rate}</td>
              <td className="table-column-data-default">{item.EUR.rate}</td>
              <td className="table-column-data-default">{item.GBP.rate}</td>
            </tr>
          ))}
      </Table>
    </div>
  );
};
