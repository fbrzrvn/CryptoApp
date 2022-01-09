import { currencies } from 'constants/currencies';

const getCurrencySymbol = (currency: string): string => {
  return currencies.find((c) => c.uuid === currency)?.symbol;
};

export default getCurrencySymbol;
