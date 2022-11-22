import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <SearchContainer>
      <select id="search">
        <option>제목</option>
        <option>내용</option>
        <option>이름</option>
      </select>
      <input
        type="text"
        className="searchInput"
        placeholder="검색어를 입력해주세요."
      />
      <div className="searchClick" type="button">
        <FaSearch />
      </div>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  select {
    cursor: pointer;
    font-size: 16px;
    width: 110px;
    border-radius: 5px 0 0 5px;
    border-color: #919eab;
  }
  .searchInput {
    font-size: 16px;
    width: 450px;
    height: 40px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-right: 0px;
    border-left: 0px;
  }
  .searchClick {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #919eab;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;
