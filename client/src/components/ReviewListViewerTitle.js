import styled from 'styled-components';
import Profile from './../img/profile.png';
import { Link } from 'react-router-dom';

function ReviewListViewerTitle() {
  return (
    <Container>
      <ReviewContentsHeader>
        <div className="linkBox">
          <Link to={'/Review'} className="listLink">
            대피소 후기 및 정보
          </Link>
        </div>
        <ReviewContentsTitle>
          <div className="header">
            <div className="tagContainer">
              <div className="tag">구로구</div>
            </div>
            <h1>봉천 초등학교 비품 현황입니다.</h1>
          </div>
          <div className="userContainer">
            <div className="userProfile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="user">
              <div className="userName">봉천초등학교</div>
              <div className="date">2022.11.11</div>
            </div>
          </div>
        </ReviewContentsTitle>
      </ReviewContentsHeader>
    </Container>
  );
}

export default ReviewListViewerTitle;

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
const ReviewContentsHeader = styled.div`
  a:link {
    text-decoration: none;
  }
  .linkBox {
    margin-bottom: 5px;
  }
  .listLink {
    color: #008505;
  }
`;
const ReviewContentsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  .header {
    display: flex;
  }
  .tag {
    padding: 5px 15px;
    align-items: center;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  h1 {
    font-size: 22px;
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
