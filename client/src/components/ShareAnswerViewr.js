import styled from 'styled-components';
import Profile from './../img/profile.png';
import axios from 'axios';
import { useRef, useCallback, useState } from 'react';

function ShareAnswerViewr({
  questionId,
  answerContents,
  answerDate,
  user,
  id,
  memberid,
}) {
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);
  const textRef = useRef();
  const [visible, setVisible] = useState(false);
  const editOnClick = () => {
    if (Number(sessionStorage.getItem('membeId')) === memberid) {
      const data = {
        answerContent: textRef.current.value,
        questionId: `${questionId}`,
        memberId: `${sessionStorage.getItem('membeId')}`,
        name: `${sessionStorage.getItem('name')}`,
      };
      axios
        .patch(`/answer/${id}`, data)
        .then(() => setVisible(false))
        .catch((err) => console.log(err));
    }
  };
  const editBox = (
    <Container>
      <Post>
        <textarea
          className="answer"
          ref={textRef}
          placeholder="댓글을 입력해 주세요."
          onInput={handleResizeHeight}
        ></textarea>
        <div className="submitButon">
          <button type="submit" onClick={editOnClick}>
            등록
          </button>
          <button type="Cancel">취소</button>
        </div>
      </Post>
    </Container>
  );
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
    <AnswerContainer>
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
              <button
                className="edit"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                수정
              </button>
              {visible && editBox}
            </DeletEdit>
          ) : null}
        </div>
        <div className="contentsBox">
          <div className="contents">{answerContents}</div>
        </div>
      </AnswerContents>
    </AnswerContainer>
  );
}

export default ShareAnswerViewr;

const AnswerContainer = styled.div`
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
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  padding: 20px 0;
`;
const Post = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;

  .submitButon {
    display: flex;
    justify-content: end;
    padding: 0 15px 15px 15px;
  }
  textarea {
    border-radius: 10px;
    padding: 15px 15px 0 15px;
    resize: none;
    width: 100%;
    border: none;
    font-size: 16px;
  }
  textarea:focus {
    outline: none;
  }
  button {
    background-color: #008505;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    cursor: pointer;
    :hover {
      background-color: #005603;
    }
  }
`;
