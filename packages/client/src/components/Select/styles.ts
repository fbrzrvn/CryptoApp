import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const SelectedOpt = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;
export const SelectedOptText = styled.span`
  margin-right: 10px;
  color: ${COLORS.black};
  font-size: 14px;
  user-select: none;
`;
export const SelectInnerWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 2.5rem;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 4rem;
  background: ${COLORS.white};
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;
export const SelectOptBtn = styled.button<{ selected: boolean }>`
  height: 40px;
  width: 100%;
  background: ${({ selected }) =>
    selected ? `${COLORS.gris200}` : 'transparent'};
  border: none;
  border-bottom: 1px solid ${COLORS.gris100};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  cursor: pointer;
  &:hover {
    background: ${COLORS.gris200};
  }
`;
