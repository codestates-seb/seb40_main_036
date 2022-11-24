import styled from 'styled-components';
import Profile from './../img/profile.png';
import { Link } from 'react-router-dom';
function EquipmentContents({ id, tag, title, content, writer, date, view }) {
  return (
    <Container>
      <ContentsList>
        <Header>
          <div className="tagContainer">
            <div className="tag">{tag}</div>
          </div>
          <Link to={`/stuffLook/${id}`} className="title">
            {title}
          </Link>
        </Header>
        <Contents>
          <div className="contentsBox">
            <Link to={`/stuffLook/${id}}`} className="contents">
              {content}
            </Link>
          </div>
          <div className="dateBox">
            <div className="date">{date}</div>
          </div>
        </Contents>
        <User>
          <div className="userBox">
            <div className="userProfile">
              <img src={Profile} alt="profile" />
            </div>
            <div className="writer">{writer}</div>
          </div>
          <div className="view">조회수: {view}</div>
        </User>
      </ContentsList>
    </Container>
  );
}

export default EquipmentContents;

const Container = styled.div``;
const ContentsList = styled.div`
  width: 350x;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.2s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  :hover {
    transform: translateY(-7px);
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
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid #d2d2d2;

  .userBox {
    display: flex;
    align-items: center;
    .userProfile {
      padding-right: 5px;
      img {
        width: 28px;
      }
    }
  }
`;
