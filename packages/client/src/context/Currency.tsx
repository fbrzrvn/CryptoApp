import React, { createContext } from 'react';
import { CurrencyTypes } from 'types/enums';
import { ChildrenProps } from 'types/props';

export const CurrencyContext = createContext({
  currency: CurrencyTypes.EUR,
  updateCurrency: (newCurrency: CurrencyTypes) => {},
});

export const CurrencyProvider = ({ children }: ChildrenProps) => {
  const [currency, setCurrency] = React.useState(CurrencyTypes.EUR);

  const updateCurrency = (newCurrency: CurrencyTypes): void => {
    setCurrency(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
