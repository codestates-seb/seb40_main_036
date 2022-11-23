import styled from 'styled-components';
function ReviewLisViewerContents() {
  return (
    <Container>
      <ReviewListContents>
        <div className="contents">물 : 20개, 이불: 30개 , 햇반 : 50개</div>
      </ReviewListContents>
      <DeletEdit>
        <button>삭제</button>
        <button className="edit">수정</button>
      </DeletEdit>
    </Container>
  );
}

export default ReviewLisViewerContents;

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
const ReviewListContents = styled.div`
  padding: 20px 0 30px 0;
  font-size: 18px;
`;
const DeletEdit = styled.div`
  display: flex;
  gap: 0px 5px;
  color: #838383;
  font-size: 18px;
  cursor: pointer;
  button {
    cursor: pointer;
    background-color: transparent;
    color: #838383;
    font-size: 16px;
    border: none;
  }
`;
