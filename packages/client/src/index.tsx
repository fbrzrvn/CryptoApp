import { CurrencyProvider } from 'context/Currency';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from 'styles/Globals';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <CurrencyProvider>
        <GlobalStyles />
        <App />
      </CurrencyProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
