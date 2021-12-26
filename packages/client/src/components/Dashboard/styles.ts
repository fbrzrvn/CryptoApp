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
