import styled from 'styled-components';
import Profile from './../img/profile.png';
import NoImage from './../img/noImage.png';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Parser from 'html-react-parser';

function EquipmentContents({
  id,
  tag,
  title,
  content,
  writer,
  date,
  view,
  count,
}) {
  return (
    <Container>
      <ContentsList>
        <ImageContainer>
          <Link to={`/stuffLook/${id}`} className="imageBox">
            <img src={NoImage} alt="이미지 없음" />
          </Link>
        </ImageContainer>
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
            <Link to={`/stuffLook/${id}`} className="contents">
              {Parser(content)}
            </Link>
          </div>
          <div className="dateBox">
            <div className="date">{date}</div>
            <div className="count">댓글: {count}</div>
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
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.2s ease-in 0s;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  :hover {
    transform: translateY(-5px);
  }
`;
const ImageContainer = styled.div`
  padding: 15px 15px 0 15px;
  img {
    width: 100%;
    border-radius: 3px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px 0 15px;
  .tag {
    margin: 0px 0px 2.5px;
    align-items: center;
    text-align: center;
    width: 85px;
    padding: 3px 5px;
    align-items: center;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0px 0px 2.5px;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
  padding: 17px;
  .contentsBox {
    margin-bottom: 10px;
  }
  .contents {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    line-height: 1.5;
    height: 73px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dateBox {
    display: flex;
    justify-content: space-between;
    .date {
      font-size: 15px;
      color: #838383;
    }
    .count {
      font-size: 15px;
      color: #838383;
    }
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
  padding: 15px 18px;
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
  .view {
    font-size: 0.9rem;
  }
`;
