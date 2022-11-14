import styled from 'styled-components';

function ShareLisViewer() {
  return (
    <Container>
      <LookContentsHeader>
        <div className="listLink">물품 나눔 게시판</div>
        <Title>
          <h1>물이 부족해요 물 나눔 부탁드립니다.</h1>
          <div className="user">
            <div className="userName">김코딩</div>
            <dic className="time">2022.11.01 14:00</dic>
          </div>
        </Title>
      </LookContentsHeader>
    </Container>
  );
}

export default ShareLisViewer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 0px;
  border-bottom-width: 2px;
  border-right-width: 0;
`;
const LookContentsHeader = styled.div`
  .listLink {
    color: #008505;
    padding-bottom: 5px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  h1 {
    font-size: 24px;
  }
  .user {
    display: flex;
    flex-direction: column;
  }
  .userName {
    font-size: 18px;
    font-weight: bold;
  }
`;
