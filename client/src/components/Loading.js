import styled, { keyframes } from 'styled-components';

function EquipmentContents() {
  return (
    <Container>
      <ContentsList>
        <div className="bar">
          <div className="indicator" />
        </div>
        <ImageContainer>
          <div className="imageBox"></div>
        </ImageContainer>
        <Header>
          <div className="tagContainer">
            <div className="tag"></div>
          </div>
          <div className="title"></div>
        </Header>
        <Contents>
          <div className="contentsBox">
            <div className="contents"></div>
          </div>
          <div className="dateBox">
            <div className="date"></div>
            <div className="count"></div>
          </div>
        </Contents>
        <User>
          <div className="userBox">
            <div className="userProfile"></div>
            <div className="writer"></div>
          </div>
          <div className="view"></div>
        </User>
      </ContentsList>
    </Container>
  );
}

export default EquipmentContents;
const skeleton = keyframes`
   0% {
    transform: translateX(0);
    opacity: 0;
  }

  20% {
    opacity: 0.25;
  }

  50% {
    opacity: 1;
  }

  80% {
    opacity: 0.5;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;
const Container = styled.div``;
const ContentsList = styled.div`
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px 0px;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  .bar {
    width: 100%;
    position: absolute;
    animation-name: ${skeleton};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }

  .indicator {
    width: 0;
    box-shadow: 0 0 75px 75px white;
  }

  .bar,
  .indicator {
    height: 380px;
  }
`;
const ImageContainer = styled.div`
  padding: 15px 15px 0 15px;

  .imageBox {
    width: 100%;
    height: 179px;
    border-radius: 3px;
    background-color: #d2d2d2;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 15px 0 15px;
  .tag {
    margin: 0px 0px 2.5px;
    align-items: center;
    width: 90px;
    height: 30px;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  .title {
    margin: 0px 0px 2.5px;
    align-items: center;
    width: 100%;
    height: 30px;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 5px;
  }
`;
const Contents = styled.div`
  width: 100%;
  padding: 15px;
  .contents {
    margin: 0px 0px 2.5px;
    align-items: center;
    width: 100%;
    height: 73px;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  .dateBox {
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    .date {
      width: 85px;
      height: 18px;
      align-items: center;
      background-color: #d2d2d2;
      border-radius: 5px;
      margin-right: 5px;
    }
    .count {
      width: 50px;
      height: 18px;
      background-color: #d2d2d2;
      border-radius: 5px;
    }
  }
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 18px;
  border-top: 1px solid #d2d2d2;
  height: 63px;
  .userBox {
    display: flex;
    align-items: center;
  }
  .userProfile {
    width: 85px;
    height: 18px;
    align-items: center;
    background-color: #d2d2d2;
    border-radius: 5px;
    margin-right: 5px;
  }
  .view {
    width: 60px;
    height: 18px;
    background-color: #d2d2d2;
    border-radius: 5px;
  }
`;
