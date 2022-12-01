// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import Parser from 'html-react-parser';

function ShareLisViewerContents({ id, content, memberId }) {
  const navigate = useNavigate();

  const deleteClick = () => {
    Swal.fire({
      title: '게시글을 삭제하시겠습니까?',
      text: '삭제하시면 다시 복구시킬 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#AC0000',
      cancelButtonColor: '#008505',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (
        result.value &&
        Number(localStorage.getItem('memberId')) === memberId
      ) {
        setTimeout(() => {
          const headers = {
            'Content-Type': 'application/json',
            token: `${localStorage.getItem('token')}`,
          };
          axios
            .delete(`/api/question/${id}`, {
              headers: headers,
            })
            .then(() => navigate(`/share`))
            .catch((err) => console.log(err));
        }, 1000);
      }
    });
  };
  return (
    <Container>
      <ShareListContents>
        <div className="contents">{Parser(content)}</div>
      </ShareListContents>
      {memberId === Number(localStorage.getItem('memberId')) ? (
        <DeletEdit>
          <button onClick={deleteClick}>삭제</button>
          <Link to={`/shareWriteUpdate/${id}`}>
            <button className="edit">수정</button>
          </Link>
        </DeletEdit>
      ) : null}
    </Container>
  );
}

export default ShareLisViewerContents;

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
const ShareListContents = styled.div`
  padding: 20px 0 30px 0;
  .ql-container {
    font-size: 1rem;
  }
  .ql-size-small {
    font-size: 0.76rem;
  }
  .ql-size-large {
    font-size: 1.5rem;
  }
  .ql-size-huge {
    font-size: 2rem;
  }
`;
const DeletEdit = styled.div`
  display: flex;
  gap: 0px 5px;

  button {
    cursor: pointer;
    background-color: transparent;
    color: #838383;
    font-size: 1.125rem;
    border: none;
    :hover {
      color: #005603;
    }
    ${tablet} {
      font-size: 1.1rem;
    }
    ${mobile} {
      font-size: 0.9rem;
    }
  }
`;
