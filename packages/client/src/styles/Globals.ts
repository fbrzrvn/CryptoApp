import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Colors';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
  }
  body {
		background-color: ${COLORS.white};
		color: ${COLORS.gris900};
  	font-family: 'Lato', sans-serif;
		font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${COLORS.black};
  }
  a {
    color: ${COLORS.blue700};
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
