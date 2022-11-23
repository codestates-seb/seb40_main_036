import styled from 'styled-components';
import Profile from './../img/profile.png';
import { Link } from 'react-router-dom';
function EquipmentContents() {
  return (
    <Container>
      <ContentsList>
        <Header>
          <div className="tagContainer">
            <div className="tag">구로구</div>
          </div>
          <Link to={`/equipmentLook`} className="title">
            봉천 초등학교 비품 현황입니다.
          </Link>
        </Header>
        <Contents>
          <div className="contentsBox">
            <Link to={`/equipmentLook`} className="contents">
              물 : 20개, 이불: 30개 , 햇반 : 50개
            </Link>
          </div>
          <div className="date">2022.11.11</div>
        </Contents>
        <User>
          <div className="userProfile">
            <img src={Profile} alt="profile" />
          </div>
          <div className="writer">봉천 초등학교</div>
        </User>
      </ContentsList>
    </Container>
  );
}

export default EquipmentContents;

const Container = styled.div`
  padding: 20px;
`;

const ContentsList = styled.div`
  width: 20rem;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  :hover {
    transform: translateY(-5px);
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px 10px 15px;
  .tag {
    padding: 0 10px;
    align-items: center;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  .title {
    font-size: 17px;
    font-weight: bold;
  }
  a:link {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
const Contents = styled.div`
  padding: 15px;
  .contentsBox {
    margin-bottom: 10px;
  }
  .date {
    font-size: 15px;
    color: #838383;
  }
  a:link {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-top: 1px solid #d2d2d2;
  .userProfile {
    padding-right: 5px;
    img {
      width: 28px;
    }
  }
`;
