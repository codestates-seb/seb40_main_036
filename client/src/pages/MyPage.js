import styled from 'styled-components';

const MyPage = () => {
  return (
    <>
      <MypageWrapper>
        <h2 className="bold title">MyPage</h2>
        <div id="info">
          <div className="d-flex my">
            <span className="bold">이름</span>
            <span>어쩌구</span>
          </div>
          <div className="d-flex my">
            <span className="bold">전화번호</span>
            <span>저쩌구</span>
          </div>
          <div className="d-flex my">
            <span className="bold">이메일</span>
            <span>머시깽이</span>
          </div>
        </div>
        <div id="reservationInfo"></div>
      </MypageWrapper>
    </>
  );
};
export default MyPage;

const MypageWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 16px auto;
  padding: 8px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  & {
    .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .my {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .bold {
      font-weight: bold;
    }
  }
`;
