import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import axios from 'axios';
const { kakao } = window;
let geocoder = new kakao.maps.services.Geocoder();
const Main = () => {
  const [locationX, setlocationX] = useState(33.450701);
  const [locationY, setlocationY] = useState(126.570667);
  const [loading, setloading] = useState(false);
  const [location, setLocation] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const displayCenterInfo = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < result.length; i++) {
          if (result[i].region_type === 'H') {
            let locationName = result[i].address_name.split(' ');
            setLocation(`${locationName[0]} ${locationName[1]}`);
            break;
          }
        }
      }
    };
    geocoder.coord2RegionCode(locationY, locationX, displayCenterInfo);
  }, []);
  useEffect(() => {
    if (location !== '') {
      axios
        .get(`/shelter/search/${location}`, {
          headers: {
            'ngrok-skip-browser-warning': '69420',
          },
        })
        .then((res) => console.log(res.data))
        .then((err) => console.log(err));
    }
  }, [location]);
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
        location={location}
        lists={lists}
      />
      <Positionrelative>
        <button onClick={getLocation}>가장 가까운 대피소찾기</button>
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
    bottom: 40px;
    background: #008505;
    font-size: 13px;
    color: white;
    font-weight: 600;
    padding: 24px 36px;
    border-radius: 10px;
  }
  button:hover {
    background: #005603;
  }
`;
