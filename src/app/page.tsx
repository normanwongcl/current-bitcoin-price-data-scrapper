'use client';

import { useSearchParams } from 'next/navigation';

import { LineChart } from '@/components/Chart/LineChart';
import { TimeSelectionMenu } from '@/components/Input/TimeSelectionMenu';
import { HistoricalListing } from '@/components/Table/HistoricalListing';
import { useCryptoHistoricalData } from '@/hooks/use-crypto-price-data';

const Home = () => {
  const searchParams = useSearchParams();
  const { cryptoHistoricalPrice, isLoading, error, setQueryString } =
    useCryptoHistoricalData('bitcoin', searchParams.toString());
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(searchParams.toString());
  return (
    <>
      <div className="sm:pt-8 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <TimeSelectionMenu setQueryString={setQueryString} />
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
            <LineChart {...cryptoHistoricalPrice} />
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-3xl">
          <HistoricalListing {...cryptoHistoricalPrice} />
        </div>
      </div>
    </>
  );
};
export default Home;
