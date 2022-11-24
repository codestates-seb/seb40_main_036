import styled from 'styled-components';
import { Link } from 'react-router-dom';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function ReviewListContents({ id, num, tag, title, writer, date, view }) {
  return (
    <Container>
      <ContentsList>
        <div className="num">{num}</div>
        <div className="titleBox">
          {tag !== '' ? <div className="tag">{tag}</div> : null}
          <Link to={`/Review/${id}`} className="title">
            {title}
          </Link>
        </div>
        <div className="writer">{writer}</div>
        <div className="date">{date}</div>
        <div className="view">{view}</div>
      </ContentsList>
    </Container>
  );
}

export default ReviewListContents;

const Container = styled.div``;

const ContentsList = styled.div`
  display: flex;
  padding: 8px 24px;
  font-size: 16px;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  text-align: center;
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
    .tag {
      width: 64px;
      padding: 0 10px;
      border: 1px solid #d2d2d2;
      border-radius: 5px;
      margin-right: 5px;
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
  ${tablet} {
    font-size: 14px;
  }
  ${mobile} {
    font-size: 12px;
  }
`;
