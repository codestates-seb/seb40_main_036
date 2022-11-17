import styled from 'styled-components';
import DownpourTips from './../img/집중호우.jpeg';
import TyphoonTips from './../img/태풍호우.jpeg';
function DownpourTipsContents() {
  return (
    <TipsContainer>
      <TipsContents>
        <div className="Downpour">
          <img src={DownpourTips} alt="DownpourTips" />
          <img src={TyphoonTips} alt="TyphoonTips" />
        </div>
      </TipsContents>
    </TipsContainer>
  );
}

export default DownpourTipsContents;

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
  .Downpour {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  img {
    max-width: 700px;
    width: 100%;
  }
`;
