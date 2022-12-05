import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { useState } from 'react';

const Paginations = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <PaginationBox>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </PaginationBox>
  );
};
export default Paginations;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
  }
  ul.pagination li a {
    color: black;
    text-decoration: none;
  }
  ul.pagination li:hover {
    background-color: hsl(210, 8%, 95%);
  }
  ul.pagination li.active a {
    color: #ffffff;
  }
  ul.pagination li.active {
    background-color: #008505;
    border-color: #008505;
  }
`;
