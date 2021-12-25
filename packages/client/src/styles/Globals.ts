import { createGlobalStyle } from 'styled-components';
import { COLORS } from './Colors';

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

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
		color: ${COLORS.black};
  	font-family: 'Montserrat', sans-serif;
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
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto', sans-serif;
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

	.App {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
	}
	.App-logo {
		height: 40vmin;
		pointer-events: none;
		animation: App-logo-spin infinite 20s linear;
	}
	.App-link {
		color: #61dafb;
	}
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
