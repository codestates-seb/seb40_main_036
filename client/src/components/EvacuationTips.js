import styled from 'styled-components';
import { useState } from 'react';
import EarthquakeTipsContents from './EarthquakeTipsContents';

const calamity = ['지진', '군중밀집', '태풍', '해일'];
function EvacuationTips() {
  const [Selected, setSelected] = useState();
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <TipstContainer>
      <TipsContent>
        <TipsTitle>
          <Header>
            <h1>재난별 대피 요령</h1>
          </Header>
          <SelectBox>
            <select onChange={handleSelect} value={Selected}>
              {calamity.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </SelectBox>
        </TipsTitle>
        <EarthquakeTipsContents />
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
  padding: 40px 24px;
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
  }
`;
