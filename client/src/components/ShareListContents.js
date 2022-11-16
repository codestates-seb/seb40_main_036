import styled from 'styled-components';

function ShareListContents() {
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
        <div className="title">물이 부족합니다</div>
        <div className="writer">김코딩</div>
        <div className="date">2022.11.11</div>
      </ContentsList>
    </Container>
  );
}

export default ShareListContents;

const Container = styled.div`
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
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
  font-size: 18px;
  font-weight: bold;
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

const ContentsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-size: 16px;
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
