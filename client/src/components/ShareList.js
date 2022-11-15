import Pagination from './pagination';
import styled from 'styled-components';
import ShareListContents from './ShareListContents';
import { useState } from 'react';

const tag = ['구로구', '강남구', '관악구', '동작구', '마포구'];

function ShareList() {
  const [Selected, setSelected] = useState();
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>물품 나눔 게시판</h1>
          </Header>
          <SelectBox>
            <select onChange={handleSelect} value={Selected}>
              {tag.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectBox>
        </ShareListTitle>
        <ShareListContents />
        <Row>
          <button>글쓰기</button>
        </Row>
        <Pagination />
      </ShareListContent>
    </ShareListContainer>
  );
}

export default ShareList;

const ShareListContainer = styled.div`
  width: 100%;
  max-width: 1254px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
`;

const ShareListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ShareListTitle = styled.div`
  padding: 0 24px;
`;

const Header = styled.div`
  height: 50px;
  margin: 0 0 12px;
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

  select {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
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
