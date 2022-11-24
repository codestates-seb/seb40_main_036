import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function ReviewLisViewerContents({ id, content, memberId }) {
  const navigate = useNavigate();
  const deleteClick = () => {
    const result = window.confirm('질문을 삭제하시겠습니까?');
    if (
      result === true &&
      Number(sessionStorage.getItem('memberId')) === memberId
    ) {
      setTimeout(() => {
        axios
          .delete(`/stuffQuestion/${id}`)
          .then(() => navigate(`/stuffList`))
          .catch((err) => console.log(err));
      }, 1000);
    }
  };
  return (
    <Container>
      <ReviewListContents>
        <div className="contents">{content}</div>
      </ReviewListContents>
      {memberId === Number(sessionStorage.getItem('memberId')) ? (
        <DeletEdit>
          <button onClick={deleteClick}>삭제</button>
          <button className="edit">수정</button>
        </DeletEdit>
      ) : null}
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
