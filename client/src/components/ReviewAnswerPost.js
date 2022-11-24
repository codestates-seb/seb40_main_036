import styled from 'styled-components';
import { useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function ReviewAnswerPost() {
  const { QuestionId } = useParams();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const handleOnClick = () => {
    if (
      ReviewAnswerPost.body !== '' &&
      textRef.current.value !== '' &&
      sessionStorage.getItem('memberId')
    ) {
      const data = {
        shelterAnswerContent: textRef.current.value,
        shelterQuestionId: `${QuestionId}`,
        memberId: `${sessionStorage.getItem('memberId')}`,
        name: `${sessionStorage.getItem('name')}`,
      };
      console.log(data);
      axios
        .post(`/shelterAnswer`, data)
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container>
      <Post>
        <div className="user"> {sessionStorage.getItem('name')}</div>
        <textarea
          className="answer"
          ref={textRef}
          placeholder="댓글을 입력해 주세요."
          onInput={handleResizeHeight}
        ></textarea>
        <div className="submitButon">
          <button type="submit" onClick={handleOnClick}>
            등록
          </button>
        </div>
      </Post>
    </Container>
  );
}

export default ReviewAnswerPost;

const Container = styled.div`
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
    ${tablet} {
      font-size: 16px;
    }
    ${mobile} {
      font-size: 14px;
    }
  }

  textarea {
    border-radius: 10px;
    padding: 15px 15px 0 15px;
    resize: none;
    width: 100%;
    border: none;
    font-size: 16px;
    ${tablet} {
      font-size: 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
  }
  textarea:focus {
    outline: none;
  }
  .submitButon {
    display: flex;
    justify-content: end;
    padding: 0 15px 15px 15px;
  }
  button {
    font-size: 16px;
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
    ${tablet} {
      font-size: 14px;
      width: 75px;
      height: 35px;
    }
    ${mobile} {
      font-size: 12px;
      width: 70px;
      height: 30px;
    }
  }
`;
