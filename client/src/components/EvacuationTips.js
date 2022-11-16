import styled from 'styled-components';
import { useState } from 'react';
import EarthquakeTipsContents from './EarthquakeTipsContents';
import CongestionTips from './CongestionTips';

function EvacuationTips() {
  const [Selected, setSelected] = useState('earthquake');
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const selectComponent = {
    earthquake: <EarthquakeTipsContents />,
    congestion: <CongestionTips />,
  };
  console.log(Selected);
  console.log(selectComponent);
  return (
    <TipstContainer>
      <TipsContent>
        <TipsTitle>
          <Header>
            <h1>재난별 대피 요령</h1>
          </Header>
          <SelectBox>
            <select onChange={handleSelect} value={Selected}>
              <option value="earthquake">지진</option>
              <option value="congestion">군중밀집</option>
            </select>
          </SelectBox>
          {Selected && <Content>{selectComponent[Selected]}</Content>}
        </TipsTitle>
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
  padding: 40px 0;
  justify-content: center;
`;

const TipsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TipsTitle = styled.div`
  padding: 24px 24px 0;
`;

const Header = styled.div`
  .h1 {
    font-size: 27px;
    margin: 0 12px 12px 0;
  }
`;
const Content = styled.div``;
const SelectBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px;

  select {
    width: 120px;
    height: 45px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
  }
`;
