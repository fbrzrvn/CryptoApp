import styled, { css } from 'styled-components';
import { COLORS } from 'styles/Colors';

const TableData = css`
  padding: 0.5rem;
  border: 1px solid ${COLORS.gris300};
  color: ${COLORS.gris900};
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
export const TableRow = styled.tr`
  display: table-row;
  vertical-align: middle;
`;
export const TableHeader = styled.th`
  ${TableData};
  background-color: ${COLORS.gris200};
  font-weight: 700;
`;
export const TableCell = styled.td`
  ${TableData};
  font-weight: 400;
`;
