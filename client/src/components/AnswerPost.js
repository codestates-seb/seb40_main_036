import styled from 'styled-components';
import Profile from './../img/profile.png';
function AnswerPost() {
  return (
    <Container>
      <Post>
        <div className="userProfile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="content">
          <div className="userName">박해커</div>
          <AnswerText id="body" cols="5" rows="5"></AnswerText>
          <button type="submit">등록</button>
        </div>
      </Post>
    </Container>
  );
}

export default AnswerPost;

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
const Post = styled.div`
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
`;
const AnswerText = styled.textarea`
  padding: 50px 10px 10px 10px;
  resize: none;
  width: 100%;
  border-radius: 10px;
`;
