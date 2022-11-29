import styled from 'styled-components';
import { Link } from 'react-router-dom';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function ShareListContents({ id, num, tag, title, writer, date, view, count }) {
  return (
    <Container>
      <ContentsList>
        <div className="num">{num}</div>
        <div className="titleBox">
          {tag !== '' ? <div className="tag">{tag}</div> : null}
          <Link to={`/share/${id}`} className="title">
            {title}
          </Link>
          <div className="count">({count})</div>
        </div>
        <div className="writer">{writer}</div>
        <div className="date">{date}</div>
        <div className="view">{view}</div>
      </ContentsList>
    </Container>
  );
}

export default ShareListContents;

const Container = styled.div``;

const ContentsList = styled.div`
  ${mobile} {
    padding: 8px 10px;
  }
  display: flex;
  padding: 8px 24px;
  font-size: 1rem;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  text-align: center;
  align-items: center;
  ${tablet} {
    font-size: 0.9rem;
  }
  ${mobile} {
    font-size: 0.8rem;
  }
  a:link {
    color: inherit;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .num {
    width: 10%;
  }
  .titleBox {
    padding-left: 10px;
    width: 40%;
    display: flex;
    align-items: center;
    .title:hover {
      text-decoration: underline;
    }
    .title {
      width: 60%;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .tag {
      width: 70px;
      padding: 0 10px;
      border: 1px solid #d2d2d2;
      border-radius: 5px;
      margin-right: 5px;
      ${tablet} {
        width: 60px;
        padding: 0.3px;
        font-size: 0.8rem;
      }
      ${mobile} {
        width: 50px;
        padding: 0 1px;
        font-size: 0.7rem;
      }
    }
    .count {
      margin-left: 3px;
      color: #008505;
      ${tablet} {
        font-size: 0.9rem;
      }
      ${mobile} {
        font-size: 0.8rem;
      }
    }
  }
  .writer {
    width: 20%;
  }
  .date {
    width: 20%;
  }
  .view {
    width: 10%;
  }
`;
