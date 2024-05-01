'use client';

import { LineChart } from '@/components/Chart/LineChart';
import { HistoricalListing } from '@/components/Table/HistoricalListing';
import { useCryptoHistoricalData } from '@/hooks/use-crypto-price-data';
const Home = () => {
  const { cryptoHistoricalPrice, isLoading, error } =
    useCryptoHistoricalData('bitcoin');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="sm:pt-8 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          <LineChart {...cryptoHistoricalPrice} />
        </div>
        <div className="mx-auto mt-4 max-w-3xl">
          <HistoricalListing {...cryptoHistoricalPrice} />
        </div>
      </div>
    </>
  );
};
export default Home;
