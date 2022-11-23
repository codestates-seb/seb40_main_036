import styled from 'styled-components';
import { useRef, useCallback, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

function AnswerEdit() {
  const location = useLocation();
  const { QuestionId } = useParams();
  const { AnswerId } = useParams();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const AnswerEditOnClick = () => {
    const data = {
      answerContent: textRef.current.value,
      questionId: `${QuestionId}`,
      memberId: `${sessionStorage.getItem('memberId')}`,
      name: `${sessionStorage.getItem('name')}`,
    };
    console.log(data);
    axios
      .patch(`/answer/${AnswerId}`, data)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    textRef.current.value = location.state;
    console.log(location);
  }, [location.state]);
  return (
    <EditContainer>
      <Post>
        <textarea
          className="answer"
          ref={textRef}
          placeholder="댓글을 입력해 주세요."
          onInput={handleResizeHeight}
        ></textarea>
        <div className="submitButon">
          <button className="submit" type="submit" onClick={AnswerEditOnClick}>
            수정
          </button>
        </div>
      </Post>
    </EditContainer>
  );
}

export default AnswerEdit;

const EditContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  padding: 20px 0;
`;
const Post = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  .user {
    padding: 15px 15px 0 15px;
    font-weight: bold;
    font-size: 18px;
  }

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
