import { render, screen } from '@testing-library/react';
import { Cryptos, Exchanges, Holdfolio, News, NotFound } from 'pages';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from 'Routes';
import App from './App';

jest.mock('react-query', () => ({
  useQuery: () => ({ isLoading: true, error: {}, data: [] }),
}));

describe('renders pages', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders app logo', () => {
    render(<App />);
    const appLogo = screen.getByText(/Crypto app/i);
    expect(appLogo).toBeInTheDocument();
  });

  test('renders news page title', async () => {
    await render(
      <MemoryRouter initialEntries={[{ pathname: Routes.NEWS }]}>
        <News />
      </MemoryRouter>,
    );
    const newsTitle = screen.getByText(/News page/i);
    expect(newsTitle).toBeInTheDocument();
  });

  test('renders cryptos page title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: Routes.CRYPTOS }]}>
        <Cryptos />
      </MemoryRouter>,
    );
    const cryptosTitle = screen.getByText(/Best 100 cryptos in the world/i);
    expect(cryptosTitle).toBeInTheDocument();
  });

  test('renders exchanges page title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: Routes.EXCHANGES }]}>
        <Exchanges />
      </MemoryRouter>,
    );
    const exchangesTitle = screen.getByText(/Exchanges page/i);
    expect(exchangesTitle).toBeInTheDocument();
  });

  test('renders holdfolio page title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: Routes.HOLDFOLIO }]}>
        <Holdfolio />
      </MemoryRouter>,
    );
    const holdfolioTitle = screen.getByText(/Holdfolio page/i);
    expect(holdfolioTitle).toBeInTheDocument();
  });

  test('renders notFound page title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: Routes.NOT_FOUND }]}>
        <NotFound />
      </MemoryRouter>,
    );
  });
});
