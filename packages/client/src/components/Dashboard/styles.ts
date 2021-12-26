import styled from 'styled-components';

interface GridLayoutProps {
  isLessThan768: boolean;
}

export const GridLayout = styled.div<GridLayoutProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLessThan768 ? '1fr' : 'auto 1fr'};
  grid-template-rows: 65px 1fr;
  grid-template-areas: ${(props) =>
    props.isLessThan768
      ? `"header" "main"`
      : `"sidebar header" "sidebar main"`};
  height: 100%;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: contain;
`;
export const Main = styled.main`
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
