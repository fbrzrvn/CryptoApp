import React from 'react';
import { CurrencyTypes } from './enums';

export interface ChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface DashboardLayoutProps {
  isSidebarOpened: boolean;
  handleSidebarOpened: (e: React.MouseEvent) => void;
}

export interface CurrencyContextProps {
  currency: CurrencyTypes;
  updateCurrency(currency: CurrencyTypes): void;
}
