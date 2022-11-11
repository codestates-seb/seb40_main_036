import Pagination from './pagination';
import styled from 'styled-components';
import ShareListContents from './ShareListContents';

function ShareList() {
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Row1>
            <h1>물품 나눔 게시판</h1>
          </Row1>
          <Row2>
            <button>글쓰기</button>
          </Row2>
        </ShareListTitle>
        <ShareListContents />
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

const Row1 = styled.div`
  height: 50px;
  margin: 0 0 12px;
  .h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
  }
`;
const Row2 = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px;
  button {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
  }
`;
