import { useState } from 'react';
import styled from 'styled-components';

const DropDown = () => {
  const [selectValue, setSelectValue] = useState('');
  const onChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <SelectRegionStyle>
        <select
          className="selectRegion"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="서울특별시">서울특별시</option>
          <option value="경기도">경기도</option>
          <option value="경상북도">경상북도</option>
          <option value="경상남도">경상남도</option>
        </select>
        <select
          className="selectDistrict"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="서울특별시">강남구</option>
          <option value="서울특별시">강동구</option>
          <option value="서울특별시">강북구</option>
          <option value="경기도">만안구</option>
          <option value="서울특별시">관악구</option>
          <option value="서울특별시">광진구</option>
          <option value="서울특별시">구로구</option>
        </select>
      </SelectRegionStyle>
    </>
  );
};

export default DropDown;

const SelectRegionStyle = styled.div`
  .selectRegion {
    width: 420px;
    height: 47px;
    left: 228px;
    top: 246px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-radius: 5px;
    margin-left: 100px;
  }
  .selectDistrict {
    width: 259px;
    height: 47px;
    left: 669px;
    top: 246px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-radius: 5px;
    margin-left: 20px;
  }
`;
