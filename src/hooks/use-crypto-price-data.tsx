import { useEffect, useState } from 'react';

export const useCryptoHistoricalData = (id: string, paramString: string) => {
  const [cryptoHistoricalPrice, setCryptoHistoricalPrice] = useState(
    {} as ICryptoHistoricalPrice
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [queryString, setQueryString] = useState(paramString ?? '');
  const CRYPTO_PRICES_API = '/api/cryptoprice';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${CRYPTO_PRICES_API}/${id}` + `?${queryString}`
        );
        const data = await response.json();

        setCryptoHistoricalPrice(data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, queryString]);
  return {
    cryptoHistoricalPrice,
    isLoading,
    error,
    queryString,
    setQueryString,
  };
};

export interface ICryptoHistoricalPrice {
  USD: {
    id: number;
    rate: string;
    rateFloat: number;
    updatedAt: Date;
    cryptoCurrencyId: number;
  }[];
  EUR: {
    id: number;
    rate: string;
    rateFloat: number;
    updatedAt: Date;
    cryptoCurrencyId: number;
  }[];
  GBP: {
    id: number;
    rate: string;
    rateFloat: number;
    updatedAt: Date;
    cryptoCurrencyId: number;
  }[];
}
