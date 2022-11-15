import styled from 'styled-components';

function EvacuationTips() {
  return (
    <TipstContainer>
      <TipsContent>
        <TipsTitle>
          <Row1>
            <h1>재난별 대피 요령</h1>
            <div className="EvacuationList">지진</div>
          </Row1>
        </TipsTitle>
        <TipsContents></TipsContents>
      </TipsContent>
    </TipstContainer>
  );
}

export default EvacuationTips;

const TipstContainer = styled.div`
  width: 100%;
  max-width: 1254px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
`;

const TipsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TipsTitle = styled.div`
  padding: 0 24px;
`;

const Row1 = styled.div`
  height: 50px;
  margin: 0 0 12px;
  .h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
  }
`;

const TipsContents = styled.div`
  border: 3px solid black;
  border-left-width: 0;
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-right-width: 0;
`;
