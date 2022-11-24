import styled from 'styled-components';
import SituationTips from './../img/상황별행동요령.jpeg';
import PlaceTips from './../img/장소별행동요령.jpeg';

function EarthquakeTipsContents() {
  return (
    <TipsContainer>
      <TipsContents>
        <div className="earthquake">
          <img src={PlaceTips} alt="PlaceTips" />
          <img src={SituationTips} alt="SituationTips" />
        </div>
      </TipsContents>
    </TipsContainer>
  );
}

export default EarthquakeTipsContents;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 0;
  padding: 20px 0;
`;
const TipsContents = styled.div`
  .earthquake {
    display: flex;
  }
  img {
    max-width: 670px;
    width: 100%;
    padding: 2px;
  }
`;
