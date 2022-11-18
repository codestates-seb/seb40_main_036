import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ShareListContents({ id, num, title, writer, date }) {
  return (
    <Container>
      <ContentsList>
        <div className="num">{num}</div>
        <Link to={`/share/${id}`} className="title">
          {title}
        </Link>
        <div className="writer">{writer}</div>
        <div className="date">{date}</div>
      </ContentsList>
    </Container>
  );
}

export default ShareListContents;

const Container = styled.div``;

const ContentsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-size: 16px;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  .num {
    width: 10%;
  }
  .title {
    width: 65%;
  }
  .writer {
    width: 15%;
  }
  .date {
    width: 10%;
  }
`;
