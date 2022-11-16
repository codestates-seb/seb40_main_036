import styled from 'styled-components';

function ReviewListContents() {
  return (
    <Container>
      <ContentsTitle>
        <div className="num">번호</div>
        <div className="title">제목</div>
        <div className="writer">작성자</div>
        <div className="date">작성일</div>
      </ContentsTitle>
      <ContentsList>
        <div className="num">01</div>
        <div className="title">봉천 초등학교 정보입니다.</div>
        <div className="writer">김코딩</div>
        <div className="date">2022.11.11</div>
      </ContentsList>
    </Container>
  );
}

export default ReviewListContents;

const Container = styled.div`
  border: 3px solid black;
  border-left-width: 0;
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-right-width: 0;
`;

const ContentsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  font-size: 20px;
  font-weight: bold;
  .num {
    width: 10%;
  }
  .title {
    width: 70%;
  }
  .writer {
    width: 10%;
  }
  .date {
    width: 10%;
  }
`;

const ContentsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-size: 18px;
  .num {
    width: 10%;
  }
  .title {
    width: 70%;
  }
  .writer {
    width: 10%;
  }
  .date {
    width: 10%;
  }
`;
