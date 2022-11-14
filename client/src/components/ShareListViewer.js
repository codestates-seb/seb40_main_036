import styled from 'styled-components';
import Profile from './../img/profile.png';
function ShareListViewer() {
  return (
    <Container>
      <ShareContentsHeader>
        <div className="listLink">물품 나눔 게시판</div>
        <ShareContentsTitle>
          <h1>물이 부족해요 물 나눔 부탁드립니다.</h1>
          <div className="userContainer">
            <div className="userProfile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="user">
              <div className="userName">김코딩</div>
              <div className="date">2022.11.01 14:00</div>
            </div>
          </div>
        </ShareContentsTitle>
      </ShareContentsHeader>
    </Container>
  );
}

export default ShareListViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 1px solid #d2d2d2;
  border-left-width: 0;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-right-width: 0;
`;
const ShareContentsHeader = styled.div`
  .listLink {
    color: #008505;
    padding-bottom: 5px;
  }
`;
const ShareContentsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  h1 {
    font-size: 24px;
  }
  .userContainer {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
  }
  .userProfile {
    margin: 5px;
    img {
      width: 53px;
    }
  }
  .user {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .userName {
    font-size: 18px;
    font-weight: bold;
  }
  .date {
    font-size: 16px;
    color: #838383;
  }
`;
