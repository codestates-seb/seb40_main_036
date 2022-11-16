import Pagination from './pagination';
import styled from 'styled-components';
import ReviewListContents from './ReviewListContents';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function ReviewList() {
  const [selectValue, setSelectValue] = useState('');
  const onChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>대피소 후기 및 정보</h1>
          </Header>
          <SelectBox>
            <select
              className="selectRegion"
              value={selectValue}
              onChange={onChangeSelect}
            >
              <option value="서울특별시">서울특별시</option>
              <option value="부산광역시">부산광역시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="대구광역시">대구광역시</option>
              <option value="대전광역시">대전광역시</option>
              <option value="광주광역시">광주광역시</option>
              <option value="울산광역시">울산광역시</option>
            </select>
            <select
              className="selectDistrict"
              value={selectValue}
              onChange={onChangeSelect}
            >
              <option value="서울특별시">강남구</option>
              <option value="서울특별시">강동구</option>
              <option value="서울특별시">강북구</option>
              <option value="인천광역시">남구</option>
              <option value="서울특별시">관악구</option>
              <option value="서울특별시">광진구</option>
              <option value="서울특별시">구로구</option>
              <option value="서울특별시">금천구</option>
              <option value="서울특별시">노원구</option>
              <option value="서울특별시">도봉구</option>
            </select>
          </SelectBox>
        </ShareListTitle>
        <ReviewListContents />
        <Row>
          <button>글쓰기</button>
        </Row>
        <Pagination />
        <SearchContainer>
          <select id="search">
            <option>제목+내용</option>
            <option>제목</option>
            <option>내용</option>
            <option>이름</option>
          </select>
          <input
            type="text"
            maxLength="20"
            className="searchInput"
            name="search"
            placeholder="검색어를 입력해주세요."
          />
          <div className="searchClick">
            <FaSearch />
          </div>
        </SearchContainer>
      </ShareListContent>
    </ShareListContainer>
  );
}

export default ReviewList;

const ShareListContainer = styled.div`
  width: 100%;
  max-width: 1254px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  justify-content: center;
`;

const ShareListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ShareListTitle = styled.div`
  padding: 24px 24px 0;
`;

const Header = styled.div`
  .h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px;
  .selectRegion {
    width: 150px;
    margin-right: 10px;
  }
  select {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 12px 0 0;
  padding: 0 24px;
  button {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  select {
    font-size: 18px;
    width: 110px;
    border-radius: 5px 0 0 5px;
    border-color: #919eab;
  }
  .searchInput {
    font-size: 18px;
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
