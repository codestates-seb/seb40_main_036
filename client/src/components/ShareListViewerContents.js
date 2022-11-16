import { Link } from 'react-router-dom';
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
        <Link to="/writeUpdate" style={{ textDecoration: 'none' }}>
          <div className="edit">수정</div>
        </Link>
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
  border: 2px solid #d2d2d2;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  border-right-width: 0;
  padding: 20px 0;
`;
const ShareListContents = styled.div`
  padding: 20px 0 30px 0;
  font-size: 18px;
`;
const DeletEdit = styled.div`
  display: flex;
  gap: 0px 5px;
  color: #838383;
  font-size: 20px;
  cursor: pointer;
  .edit {
    color: #838383;
  }
`;
