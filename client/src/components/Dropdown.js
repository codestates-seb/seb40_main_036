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
          <option value="부산광역시">부산광역시</option>
          <option value="인천광역시">인천광역시</option>
          <option value="대구광역시">대구광역시</option>
          <option value="대전광역시">대전광역시</option>
          <option value="광주광역시">광주광역시</option>
          <option value="울산광역시">울산광역시</option>
        </select>
        <select
          className="selectDistrict"
          value={selectValue}
          onChange={onChangeSelect}
        >
          <option value="서울특별시">강남구</option>
          <option value="서울특별시">강동구</option>
          <option value="서울특별시">강북구</option>
          <option value="인천광역시">남구</option>
          <option value="서울특별시">관악구</option>
          <option value="서울특별시">광진구</option>
          <option value="서울특별시">구로구</option>
          <option value="서울특별시">금천구</option>
          <option value="서울특별시">노원구</option>
          <option value="서울특별시">도봉구</option>
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
