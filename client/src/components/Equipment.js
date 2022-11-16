import Pagination from './pagination';
import styled from 'styled-components';
import EquipmentContents from './EquipmentContents';

import { FaSearch } from 'react-icons/fa';
import DropDown from './Dropdown';

function Equipment() {
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>비품 현황</h1>
          </Header>
          <SelectBox>
            <DropDown />
          </SelectBox>
        </ShareListTitle>
        <EquipmentContents />
        <Row>
          <button className="writing">글쓰기</button>
        </Row>
        <Pagination />
        <SearchContainer>
          <select id="search">
            <option>제목+내용</option>
            <option>제목</option>
            <option>내용</option>
            <option>기관</option>
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

export default Equipment;

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
    width: 210px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
  .selectDistrict {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 12px 0 0;
  padding: 0 24px;
  .writing {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    cursor: pointer;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  select {
    cursor: pointer;
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
