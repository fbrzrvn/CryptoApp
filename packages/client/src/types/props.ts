import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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

export interface CryptoStatsData {
  id: number;
  icon: IconDefinition;
  title: string;
  titleMobile?: string;
  value: string | number | boolean;
  comment?: string;
  hasTooltip: boolean;
  tooltipText?: string;
}
