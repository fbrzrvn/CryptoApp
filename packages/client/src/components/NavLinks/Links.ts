import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faExchangeAlt,
  faHandHoldingUsd,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

export interface LinkType {
  id: number;
  label: string;
  route: string;
  icon: IconProp;
}

export const Links = [
  {
    id: 11,
    label: 'News',
    route: '/',
    icon: faNewspaper,
  },
  {
    id: 12,
    label: 'Cryptos',
    route: '/cryptos',
    icon: faBitcoin,
  },
  {
    id: 13,
    label: 'Exchanges',
    route: '/exchanges',
    icon: faExchangeAlt,
  },
  {
    id: 14,
    label: 'Holdfolio',
    route: '/holdfolio',
    icon: faHandHoldingUsd,
  },
];
