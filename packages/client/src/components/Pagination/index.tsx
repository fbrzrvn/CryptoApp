import { CRYPTOS_FOR_PAGE } from 'constants/cryptoApi';
import { CryptosResponseData } from 'models/Cryptos';
import React from 'react';
import { Container, PageBtn, PageNumber } from './styles';

interface PaginationProps {
  offset: number;
  setOffset: (offset: number) => void;
  data: CryptosResponseData;
}

const Pagination: React.VFC<PaginationProps> = ({
  offset,
  setOffset,
  data,
}) => {
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(data?.stats?.totalCoins / CRYPTOS_FOR_PAGE);

  const handleNextPage = () => {
    setOffset(offset + CRYPTOS_FOR_PAGE);
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setOffset(offset - CRYPTOS_FOR_PAGE);
    setPage(page - 1);
  };

  return (
    <>
      {data && (
        <Container>
          {page > 1 && (
            <PageBtn type="button" onClick={handlePrevPage}>
              Prev page
            </PageBtn>
          )}
          <PageNumber>{page}</PageNumber>
          {page < totalPages && (
            <PageBtn type="button" onClick={handleNextPage}>
              Next page
            </PageBtn>
          )}
        </Container>
      )}
    </>
  );
};

export default Pagination;
