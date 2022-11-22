import styled from 'styled-components';
import Profile from './../img/profile.png';
import axios from 'axios';
function ShareAnswerViewr({ answerContents, answerDate, user, id, memberid }) {
  const deleteClick = () => {
    const result = window.confirm('답변을 삭제하시겠습니까?');
    if (
      result === true &&
      Number(sessionStorage.getItem('membeId')) === memberid
    ) {
      setTimeout(() => {
        axios
          .delete(`/answer/${id}`)
          .then(() => window.location.reload())
          .catch((err) => console.log(err));
      }, 1000);
    }
  };

  return (
    <Container>
      <AnswerContents>
        <div className="answerTitle">
          <div className="userBox">
            <div className="userProfile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="user">
              <div className="userName">{user}</div>
              <div className="date">{answerDate}</div>
            </div>
          </div>
          {memberid === Number(sessionStorage.getItem('membeId')) ? (
            <DeletEdit>
              <button onClick={deleteClick}>삭제</button>
              <button className="edit">수정</button>
            </DeletEdit>
          ) : null}
        </div>
        <div className="contentsBox">
          <div className="contents">{answerContents}</div>
        </div>
      </AnswerContents>
    </Container>
  );
}

export default ShareAnswerViewr;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 1px solid #d2d2d2;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  padding: 20px 0;
`;
const AnswerContents = styled.div`
  .answerTitle {
    display: flex;
    justify-content: space-between;
  }
  .userBox {
    display: flex;
    align-items: center;
  }
  .userProfile {
    padding: 10px;
    img {
      width: 53px;
    }
  }
  .userName {
    font-weight: bold;
    font-size: 18px;
  }
  .contentsBox {
    display: flex;
    padding: 10px;
  }
  .contents {
    font-size: 16px;
  }
  .date {
    font-size: 14px;
    color: #838383;
  }
`;
const DeletEdit = styled.div`
  display: flex;
  padding-right: 30px;
  justify-content: end;
  gap: 0px 5px;
  padding-left: 73px;
  button {
    cursor: pointer;
    background-color: transparent;
    color: #838383;
    font-size: 16px;
    border: none;
  }
`;
