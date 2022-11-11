import styled from "styled-components";

function ShareList() {
  return (
    <ShareListContaner>
      <ShareListTitle>
        <Row1>
          <h1>물품 나눔 게시판</h1>
        </Row1>
        <Row2>
          <button>글쓰기</button>
        </Row2>
      </ShareListTitle>
    </ShareListContaner>
  );
}

export default ShareList;

const ShareListContaner = styled.div`
  width: 100%;
  max-width: 1100px;
`;

const ShareListTitle = styled.div`
  width: 100%;
  max-width: 1100px;
  h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0 0 12px;
`;
const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 12px;
`;