export interface ICurrentPriceData {
  time: ICurrentPriceTime;
  disclaimer: string;
  chartName: string;
  bpi: IBpi;
}

export interface IBpi {
  USD: ICurrencyDetails;
  GBP: ICurrencyDetails;
  EUR: ICurrencyDetails;
}

export interface ICurrencyDetails {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface ICurrentPriceTime {
  updated: string;
  updatedISO: Date;
  updateduk: string;
}
