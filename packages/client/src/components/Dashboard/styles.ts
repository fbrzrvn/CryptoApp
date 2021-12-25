import styled from 'styled-components';

interface GlobalsStyledProps {
  isLessThan833: boolean;
}

export const GridLayout = styled.div<GlobalsStyledProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLessThan833 ? '1fr' : 'auto 1fr'};
  grid-template-rows: ${(props) =>
    props.isLessThan833 ? '55px 1fr' : '65px 1fr'};
  grid-template-areas: ${(props) =>
    props.isLessThan833
      ? `"header" "main"`
      : `"sidebar header" "sidebar main"`};
  height: 100%;
  width: 100%;
  overflow: hidden;
  overscroll-behavior: contain;
`;
