import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import Map from '../components/Map';

const Main = () => {
  const [locationX, setlocationX] = useState(33.450701);
  const [locationY, setlocationY] = useState(126.570667);
  const [loading, setloading] = useState(false);

  const onclickhandle = () => {
    console.log('test');
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      setloading(true);
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setlocationX(position.coords.latitude);
          setlocationY(position.coords.longitude);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  };
  return (
    <>
      <Map
        x={locationX}
        y={locationY}
        loading={loading}
        setloading={setloading}
      />
      <Positionrelative>
        <Button
          text={<FontAwesomeIcon icon={solid('location-crosshairs')} />}
          onclick={getLocation}
        />
        <Button onclick={onclickhandle} text={'가장 가까운 대피소찾기'} />
      </Positionrelative>
    </>
  );
};
export default Main;

const Positionrelative = styled.div`
  position: relative;
  button {
    position: fixed;
    border: none;
    right: 40px;
  }
  button:first-child {
    bottom: 150px;
    padding: 12px;
    border-radius: 50%;
    background: white;
    border: 1px solid #008505;
    color: #008505;
  }
  button:first-child:hover {
    background: lightgray;
  }
  button:last-child {
    bottom: 40px;
    background: #008505;
    font-size: 13px;
    color: white;
    font-weight: 600;
    padding: 24px 36px;
    border-radius: 10px;
  }
  button:last-child:hover {
    background: #005603;
  }
`;
