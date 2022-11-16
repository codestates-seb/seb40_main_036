import styled from 'styled-components';
import Profile from './../img/profile.png';
import { useRef, useCallback } from 'react';
function AnswerPost() {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);
  return (
    <Container>
      <Post>
        <div className="user">
          <div className="userProfile">
            <img src={Profile} alt="profile" />
          </div>
          <div className="content">
            <div className="userName">박해커</div>
          </div>
        </div>
        <textarea
          className="answer"
          ref={textRef}
          placeholder="댓글을 입력해 주세요."
          onInput={handleResizeHeight}
        ></textarea>
        <div className="submitButon">
          <button type="submit">등록</button>
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
    display: flex;
    align-items: center;
    padding: 10px 0 0 10px;
  }
  .userProfile {
    img {
      width: 35px;
    }
  }
  .userName {
    margin-left: 2px;
    font-weight: bold;
    font-size: 20px;
  }
  .submitButon {
    display: flex;
    justify-content: end;
    padding: 0 10px 10px 10px;
  }
  textarea {
    padding: 10px;
    resize: none;
    width: 100%;
    border: none;
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
