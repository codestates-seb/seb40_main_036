import styled from 'styled-components';
import congestionTips from './../img/압사시행동요령.jpeg';

function CongestionTipsContents() {
  return (
    <TipsContainer>
      <TipsContents>
        <div className="congestion">
          <img src={congestionTips} alt="congestionTips" />
        </div>
      </TipsContents>
    </TipsContainer>
  );
}

export default CongestionTipsContents;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 0;
  padding: 20px 0;
`;
const TipsContents = styled.div`
  .congestion {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  img {
    max-width: 800px;
    width: 100%;
  }
`;
