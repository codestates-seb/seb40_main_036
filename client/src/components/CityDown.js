import { useRef, useState } from 'react';
import styled from 'styled-components';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
const DropDown = ({ onChange, value }) => {
  const [selectValue, setSelectValue] = useState('');

  const state = useRef();
  const onChangeSelect = (e) => {
    const seoul = [
      '강남구',
      '강동구',
      '강북구',
      '강서구',
      '관악구',
      '광진구',
      '구로구',
      '금천구',
      '노원구',
      '도봉구',
      '동대문구',
      '동작구',
      '마포구',
      '서대문구',
      '서초구',
      '성동구',
      '성북구',
      '송파구',
      '양천구',
      '영등포구',
      '용산구',
      '은평구',
      '종로구',
      '중구',
      '중랑구',
    ];
    const gyeonggi = [
      '고양시',
      '과천시',
      '광명시',
      '광주시',
      '구리시',
      '군포시',
      '김포시',
      '남양주시',
      '동두천시',
      '부천시',
      '성남시',
      '수원시',
      '시흥시',
      '안산시',
      '안성시',
      '안양시',
      '양주시',
      '오산시',
      '용인시',
      '의왕시',
      '의정부시',
      '이천시',
      '파주시',
      '평택시',
      '포천시',
      '하남시',
      '화성시',
      '가평군',
      '양평군',
      '여주군',
      '연천군',
    ];
    const gyeongsangnam = [
      '거제시',
      '김해시',
      '마산시',
      '밀양시',
      '사천시',
      '양산시',
      '진주시',
      '진해시',
      '창원시',
      '통영시',
      '거창군',
      '고성군',
      '남해군',
      '산청군',
      '의령군',
      '창녕군',
      '하동군',
      '함안군',
      '함양군',
      '합천군',
    ];
    const gyeongsangbuk = [
      '경산시',
      '경주시',
      '구미시',
      '김천시',
      '문경시',
      '상주시',
      '안동시',
      '영주시',
      '영천시',
      '포항시',
      '고령군',
      '군위군',
      '봉화군',
      '성주군',
      '영덕군',
      '영양군',
      '예천군',
      '울릉군',
      '울진군',
      '의성군',
      '청도군',
      '청송군',
      '칠곡군',
    ];
    // let state = document.getElementById('good');
    let d;
    const currentRegion = e.target.value;

    if (currentRegion === '서울특별시') {
      d = seoul;
    } else if (currentRegion === '경기도') {
      d = gyeonggi;
    } else if (currentRegion === '경상남도') {
      d = gyeongsangnam;
    } else if (currentRegion === '경상북도') {
      d = gyeongsangbuk;
    }

    state.current.options.length = 1;

    for (let x in d) {
      let opt = document.createElement('option');
      opt.innerHTML = d[x];
      state.current.appendChild(opt);
    }
    setSelectValue(currentRegion);
  };

  return (
    <SelectRegionStyle>
      <select
        className="selectRegion"
        value={selectValue}
        onChange={onChangeSelect}
      >
        <option>--지역을 선택해주세요--</option>
        <option value="서울특별시">서울특별시</option>
        <option value="경기도">경기도</option>
        <option value="경상북도">경상북도</option>
        <option value="경상남도">경상남도</option>
      </select>
      <select
        className="selectDistrict"
        ref={state}
        onChange={onChange}
        value={value}
      >
        <option>시/군/구 선택</option>
      </select>
    </SelectRegionStyle>
  );
};

export default DropDown;

const SelectRegionStyle = styled.div`
  display: flex;
  .selectRegion {
    width: auto;
    height: auto;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 7px;
    cursor: pointer;
    ${tablet} {
      font-size: 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
  }
  .selectDistrict {
    margin-left: 10px;
    width: auto;
    height: auto;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 7px;
    cursor: pointer;
    ${tablet} {
      font-size: 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
  }
`;
