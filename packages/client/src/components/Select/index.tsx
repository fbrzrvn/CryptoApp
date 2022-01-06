import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currencies } from 'constants/currencies';
import { CurrencyContext } from 'context/Currency';
import React from 'react';
import { CurrencyTypes } from 'types/enums';
import {
  SelectedOpt,
  SelectedOptText,
  SelectInnerWrapper,
  SelectOptBtn,
  SelectWrapper,
} from './styles';

const Select = () => {
  const { currency, updateCurrency } = React.useContext(CurrencyContext);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SelectWrapper>
      <SelectedOpt onClick={() => setIsOpen(!isOpen)}>
        <SelectedOptText>{currency}</SelectedOptText>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          onClick={() => setIsOpen(!isOpen)}
        />
      </SelectedOpt>
      <SelectInnerWrapper isOpen={isOpen}>
        {currencies.map((c) => (
          <SelectOptBtn
            selected={c === currency}
            onClick={() => {
              updateCurrency(CurrencyTypes[c]);
              setIsOpen(false);
            }}
          >
            {c}
          </SelectOptBtn>
        ))}
      </SelectInnerWrapper>
    </SelectWrapper>
  );
};

export default Select;
