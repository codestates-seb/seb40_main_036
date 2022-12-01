import styled from 'styled-components';
import { useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function AnswerPost() {
  const navigate = useNavigate();
  const { QuestionId } = useParams();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  const handleOnClick = () => {
    if (
      AnswerPost.body !== '' &&
      textRef.current.value !== '' &&
      localStorage.getItem('memberId')
    ) {
      const data = {
        answerContent: textRef.current.value,
        questionId: `${QuestionId}`,
        memberId: `${localStorage.getItem('memberId')}`,
      };
      const headers = {
        'Content-Type': 'application/json',
        token: `${localStorage.getItem('token')}`,
      };
      console.log(data);
      axios
        .post(`/api/answer`, data, {
          headers: headers,
        })
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        title: '로그인 후 이용해주세요.',
        text: '로그인 후 댓글을 작성하실 수 있습니다.',
        confirmButtonColor: '#008505',
      });
      navigate('/login');
    }
  };
  return (
    <Container>
      <Post>
        <div className="user"> {localStorage.getItem('name')}</div>
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

export default AnswerPost;

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
    font-size: 1.125rem;
    ${tablet} {
      font-size: 1.1rem;
    }
    ${mobile} {
      font-size: 0.8rem;
    }
  }

  .submitButon {
    display: flex;
    justify-content: end;
    padding: 0 15px 15px 15px;
    button {
      background-color: #008505;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      width: 5rem;
      height: 2.5rem;
      cursor: pointer;
      :hover {
        background-color: #005603;
      }
      ${tablet} {
        font-size: 0.8rem;
        width: 4.5rem;
        height: 2.2rem;
      }
      ${mobile} {
        font-size: 0.7rem;
        width: 4.2rem;
        height: 2rem;
      }
    }
  }
  textarea {
    border-radius: 10px;
    padding: 15px 15px 0 15px;
    resize: none;
    width: 100%;
    border: none;
    font-size: 1rem;
    ${tablet} {
      font-size: 0.8rem;
    }
    ${mobile} {
      font-size: 0.7rem;
    }
  }
  textarea:focus {
    outline: none;
  }
`;
