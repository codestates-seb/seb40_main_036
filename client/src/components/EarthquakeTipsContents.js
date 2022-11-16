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
  max-width: 1254px;
  border: 3px solid black;
  border-left-width: 0;
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-right-width: 0;
  padding: 20px 0;
`;
const TipsContents = styled.div`
  .earthquake {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  img {
    max-width: 700px;
    width: 100%;
  }
`;
