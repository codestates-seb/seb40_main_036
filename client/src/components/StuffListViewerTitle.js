import styled from 'styled-components';
import Profile from './../img/profile.png';
import { Link } from 'react-router-dom';

function EquipmentViewrTitle({ title, name, date, tag }) {
  return (
    <Container>
      <EquipmentContentsHeader>
        <div className="linkBox">
          <Link to={'/stuffList'} className="listLink">
            비품현황
          </Link>
        </div>
        <EquipmentContentsTitle>
          <div className="header">
            <div className="tagContainer">
              {tag !== '' ? <div className="tag">{tag}</div> : null}
            </div>
            <h1>{title}</h1>
          </div>
          <div className="userContainer">
            <div className="userProfile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="user">
              <div className="userName">{name}</div>
              <div className="date">{date}</div>
            </div>
          </div>
        </EquipmentContentsTitle>
      </EquipmentContentsHeader>
    </Container>
  );
}

export default EquipmentViewrTitle;

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
const EquipmentContentsHeader = styled.div`
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
const EquipmentContentsTitle = styled.div`
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
