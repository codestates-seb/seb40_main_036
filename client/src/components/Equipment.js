import styled from 'styled-components';
import EquipmentContents from './EquipmentContents';
import CityDown from './CityDown';
import { useRef } from 'react';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';
function Equipment() {
  const textRef = useRef();
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>비품 현황</h1>
          </Header>
          <SelectBox>
            <CityDown />
            <Row>
              <button className="writing">
                <FaPencilAlt />
                글쓰기
              </button>
            </Row>
          </SelectBox>
        </ShareListTitle>
        <ContentsContainer>
          <SearchContainer>
            <select id="search">
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="name">이름</option>
            </select>
            <input
              className="searchInput"
              placeholder="검색어를 입력해주세요."
              ref={textRef}
              type="search"
            />
            <button className="searchClick">
              <FaSearch />
            </button>
          </SearchContainer>
          <EquipmentContents />
        </ContentsContainer>
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
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  border-right-width: 0;
`;

const Header = styled.div`
  h1 {
    font-size: 27px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
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
const ContentsContainer = styled.div``;
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
