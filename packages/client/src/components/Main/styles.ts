import styled from 'styled-components';

export const MainContainer = styled.main`
  grid-area: main;
  min-height: calc(100vh - 65px);
  height: 100%;
  padding: 1.5rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1540px) {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
