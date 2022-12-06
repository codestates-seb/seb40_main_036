import styled from 'styled-components';
import Profile from './../img/profile.png';
import { Link } from 'react-router-dom';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function ShareListViewer({ title, name, date, tag }) {
  return (
    <Container>
      <ShareContentsHeader>
        <div className="linkBox">
          <Link to={'/share'} className="listLink">
            물품 나눔 게시판
          </Link>
        </div>
        <ShareContentsTitle>
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
  a:link {
    text-decoration: none;
  }
  .linkBox {
    margin-bottom: 5px;
  }
  .listLink {
    color: #008505;
    ${tablet} {
      font-size: 0.8rem;
    }
    ${mobile} {
      font-size: 0.7rem;
    }
    :hover {
      color: #005603;
    }
  }
`;
const ShareContentsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  .header {
    display: flex;
  }
  .tag {
    width: 80px;
    padding: 3px 7px;
    text-align: center;
    align-items: center;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
    ${tablet} {
      font-size: 0.8rem;
      width: 70px;
      padding: 3px 7px;
    }
    ${mobile} {
      font-size: 0.7rem;
      width: 60px;
      padding: 3px 7px;
    }
  }
  h1 {
    font-size: 1.375rem;
    ${tablet} {
      font-size: 1.2rem;
    }
    ${mobile} {
      font-size: 0.9rem;
    }
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
      width: 3.3rem;
      ${tablet} {
        width: 2.7rem;
      }
      ${mobile} {
        width: 2rem;
      }
    }
  }
  .user {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .userName {
    font-size: 1.125rem;
    font-weight: bold;
    ${tablet} {
      font-size: 1.05rem;
    }
    ${mobile} {
      font-size: 0.9rem;
    }
  }
  .date {
    font-size: 1rem;
    color: #838383;
    ${tablet} {
      font-size: 0.8rem;
    }
    ${mobile} {
      font-size: 0.7rem;
    }
  }
`;
