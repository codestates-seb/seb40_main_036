import styled from 'styled-components';
import Profile from './../img/profile.png';
import axios from 'axios';
import { useRef, useCallback, useState } from 'react';
function ReviewAnswerViewr({
  answerContents,
  answerDate,
  user,
  id,
  memberid,
  questionId,
}) {
  const [modal, setModal] = useState(false);
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const AnswerEditOnClick = () => {
    if (Number(sessionStorage.getItem('memberId')) === memberid) {
      const data = {
        stuffAnswerContent: textRef.current.value,
        stuffQuestionId: `${questionId}`,
        memberId: `${sessionStorage.getItem('memberId')}`,
        name: `${sessionStorage.getItem('name')}`,
      };
      console.log(data);
      axios
        .patch(`/stuffAnswer/${id}`, data)
        .then(() => setModal(false), window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  const editing = (
    <EditContainer>
      <Post>
        <textarea
          className="answer"
          ref={textRef}
          defaultValue={answerContents}
          placeholder="댓글을 입력해 주세요."
          onInput={handleResizeHeight}
        ></textarea>
        <div className="submitButon">
          <button className="cencel" onClick={() => setModal(false)}>
            취소
          </button>
          <button
            className="submit"
            type="submit"
            onClick={() => {
              AnswerEditOnClick();
            }}
          >
            수정
          </button>
        </div>
      </Post>
    </EditContainer>
  );
  const deleteClick = () => {
    const result = window.confirm('답변을 삭제하시겠습니까?');
    if (
      result === true &&
      Number(sessionStorage.getItem('memberId')) === memberid
    ) {
      setTimeout(() => {
        axios
          .delete(`/stuffAnswer/${id}`)
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
          {memberid === Number(sessionStorage.getItem('memberId')) ? (
            <DeletEdit>
              <button onClick={deleteClick}>삭제</button>
              <button
                className="edit"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                {modal ? null : '수정'}
              </button>
            </DeletEdit>
          ) : null}
        </div>
        <div className="contentsBox">
          {modal === false ? (
            <div className="contents">{answerContents}</div>
          ) : (
            editing
          )}
        </div>
      </AnswerContents>
    </AnswerContainer>
  );
}

export default ReviewAnswerViewr;

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
    padding-left: 20px;
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
const EditContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
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
  .submit {
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
  .cencel {
    margin-right: 5px;
    background-color: #ffffff;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    cursor: pointer;
    :hover {
      background-color: #d2d2d2;
    }
  }
`;
