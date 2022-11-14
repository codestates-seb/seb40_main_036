import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const Main = () => {
  const [myLocation, setMyLocation] = useState(
    37.566481622437934,
    126.98502302169841
  );
  useEffect(() => {
    initTmap();
  }, []);
  useEffect(() => {
    console.log(myLocation);
  }, [myLocation]);
  function initTmap() {
    new window.Tmapv2.Map('TMapApp', {
      center: new window.Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
      width: '100%',
      height: '100%',
      zoom: 15,
    });
  }

  const onclickhandle = () => {
    console.log('test');
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setMyLocation(position.coords.latitude, position.coords.longitude);
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
      <MapWrapper id="TMapApp" />
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
const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
`;
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
