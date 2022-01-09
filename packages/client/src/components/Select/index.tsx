import {
  faCaretDown,
  faCaretUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currencies } from 'constants/currencies';
import { CurrencyContext } from 'context/Currency';
import { useClickOutside } from 'hooks';
import React from 'react';
import { CurrencyTypes } from 'types/enums';
import { getCurrencySymbol } from 'utils';
import {
  SelectedOpt,
  SelectedOptBtnLabel,
  SelectedOptText,
  SelectInnerWrapper,
  SelectOptBtn,
  SelectWrapper,
} from './styles';

const Select = () => {
  const { currency, updateCurrency } = React.useContext(CurrencyContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const elementRef = useClickOutside(() => setIsOpen(false));

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string): void => {
    updateCurrency(value as CurrencyTypes);
    setIsOpen(false);
  };

  return (
    <SelectWrapper ref={elementRef}>
      <SelectedOpt onClick={handleClick}>
        <SelectedOptText>{getCurrencySymbol(currency)}</SelectedOptText>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          onClick={handleClick}
        />
      </SelectedOpt>
      <SelectInnerWrapper isOpen={isOpen}>
        {currencies.map((c) => (
          <SelectOptBtn
            key={c.uuid}
            selected={c.uuid === currency}
            onClick={() => handleSelect(c.uuid)}
          >
            {c.uuid === currency && <FontAwesomeIcon icon={faCheck} />}
            <SelectedOptBtnLabel>{c.symbol}</SelectedOptBtnLabel>
          </SelectOptBtn>
        ))}
      </SelectInnerWrapper>
    </SelectWrapper>
  );
};

export default Select;
