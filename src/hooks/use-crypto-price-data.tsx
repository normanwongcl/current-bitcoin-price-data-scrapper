import { useEffect, useState } from 'react';

export const useCryptoHistoricalData = (id: string) => {
  const [cryptoHistoricalPrice, setCryptoHistoricalPrice] = useState(
    {} as ICryptoHistoricalPrice
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const CRYPTO_PRICES_API = '/api/cryptoPrice';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${CRYPTO_PRICES_API}/${id}`);
        const data = await response.json();

        setCryptoHistoricalPrice(data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return { cryptoHistoricalPrice, isLoading, error };
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
