import { Table } from './Table';

import { ICryptoHistoricalPrice } from '@/hooks/use-crypto-price-data';
import { dateformatter } from '@/utils/dateformatter';
export const HistoricalListing = (
  cryptoHistoricalPrice: ICryptoHistoricalPrice
) => {
  return (
    <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="my-6 "></div>
      <Table>
        {cryptoHistoricalPrice &&
          cryptoHistoricalPrice.USD.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 sm:pl-4">
                {dateformatter(item.updatedAt)}
              </td>
              <td className="table-column-data-default">{item.rate}</td>
            </tr>
          ))}
      </Table>
    </div>
  );
};
