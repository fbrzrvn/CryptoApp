import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faExchangeAlt,
  faHandHoldingUsd,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import Routes from 'Routes';

export interface LinkType {
  id: number;
  label: string;
  route: Routes;
  icon: IconProp;
}

export const Links = [
  {
    id: 11,
    label: 'News',
    route: Routes.NEWS,
    icon: faNewspaper,
  },
  {
    id: 12,
    label: 'Cryptos',
    route: Routes.CRYPTOS,
    icon: faBitcoin,
  },
  {
    id: 13,
    label: 'Exchanges',
    route: Routes.EXCHANGES,
    icon: faExchangeAlt,
  },
  {
    id: 14,
    label: 'Holdfolio',
    route: Routes.HOLDFOLIO,
    icon: faHandHoldingUsd,
  },
];
