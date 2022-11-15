import styled from 'styled-components';
import Profile from './../img/profile.png';
function ShareAnswerViewr() {
  return (
    <Container>
      <AnswerContents>
        <div className="userProfile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="content">
          <div className="userName">박해커</div>
          <div className="contents">저 물 있습니다!!</div>
          <div className="date">2022.11.01 15:00</div>
        </div>
      </AnswerContents>
      <DeletEdit>
        <div className="delete">삭제</div>
        <div className="edit">수정</div>
      </DeletEdit>
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
  font-size: 18px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  .userProfile {
    padding: 10px;
    img {
      width: 53px;
    }
  }
  .userName {
    font-weight: bold;
    font-size: 20px;
  }
  .date {
    font-size: 16px;
    color: #838383;
  }
`;
const DeletEdit = styled.div`
  display: flex;
  gap: 0px 5px;
  color: #838383;
  font-size: 18px;
  padding-left: 73px;
  cursor: pointer;
`;
