import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'styles/Globals';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
