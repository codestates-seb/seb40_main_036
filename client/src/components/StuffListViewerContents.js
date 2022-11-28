import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import Parser from 'html-react-parser';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function StuffLisViewerContents({ id, content, memberId }) {
  const navigate = useNavigate();
  const deleteClick = () => {
    const result = window.confirm('질문을 삭제하시겠습니까?');
    if (
      result === true &&
      Number(sessionStorage.getItem('memberId')) === memberId
    ) {
      setTimeout(() => {
        axios
          .delete(`/stuffQuestion/${id}`)
          .then(() => navigate(`/stuffList`))
          .catch((err) => console.log(err));
      }, 1000);
    }
  };
  return (
    <Container>
      <StuffListContents>
        <div className="contents">{Parser(content)}</div>
      </StuffListContents>
      {memberId === Number(sessionStorage.getItem('memberId')) ? (
        <DeletEdit>
          <button onClick={deleteClick}>삭제</button>
          <Link to={`/stuffWriteUpdate/${id}`}>
            <button className="edit">수정</button>
          </Link>
        </DeletEdit>
      ) : null}
    </Container>
  );
}

export default StuffLisViewerContents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 2px solid #d2d2d2;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  border-right-width: 0;
  padding: 20px 0;
`;
const StuffListContents = styled.div`
  padding: 20px 0 30px 0;
  font-size: 1.125rem;
  ${tablet} {
    font-size: 1rem;
  }
  ${mobile} {
    font-size: 0.8rem;
  }
`;
const DeletEdit = styled.div`
  display: flex;
  gap: 0px 5px;
  color: #838383;
  font-size: 1.125rem;
  cursor: pointer;
  ${tablet} {
    font-size: 1.1rem;
  }
  ${mobile} {
    font-size: 0.9rem;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    color: #838383;
    font-size: 1rem;
    border: none;
    ${tablet} {
      font-size: 0.8rem;
    }
    ${mobile} {
      font-size: 0.7rem;
    }
  }
`;
