import React, { createContext } from 'react';
import { CurrencyTypes } from 'types/enums';
import { ChildrenProps, CurrencyContextProps } from 'types/props';

export const CurrencyContext = createContext<CurrencyContextProps>({
  currency: CurrencyTypes.EUR,
  updateCurrency: (newCurrency: CurrencyTypes) => null,
});

export const CurrencyProvider: React.VFC<ChildrenProps> = ({ children }) => {
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
