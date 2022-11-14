import styled from 'styled-components';

function ShareLisViewerContents() {
  return (
    <Container>
      <ShareListContents>
        <div className="contents">
          물이 부족합니다. 물을 나눠주실 수 있나요?
        </div>
      </ShareListContents>
      <DeletEdit>
        <div className="delete">삭제</div>
        <div className="edit">수정</div>
      </DeletEdit>
    </Container>
  );
}

export default ShareLisViewerContents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  padding: 20px 0;
`;
const ShareListContents = styled.div``;
const DeletEdit = styled.div`
  display: flex;
`;
