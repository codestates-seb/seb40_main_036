import { useState } from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import axios from 'axios';

const skAppKey = 'l7xx846db5f3bc1e48d29b7275a745d501c8';
const Main = () => {
  const [locationX, setlocationX] = useState(33.450701);
  const [locationY, setlocationY] = useState(126.570667);
  const [loading, setloading] = useState(false);
  const [location, setLocation] = useState('');
  const [lists, setLists] = useState([]);

  const GetCity = (x, y) => {
    const options1 = {
      method: 'GET',
      url: 'https://apis.openapi.sk.com/tmap/geo/reversegeocoding',
      params: {
        version: '1',
        lat: x,
        lon: y,
        coordType: 'WGS84GEO',
        addressType: 'A01',
      },
      headers: {
        accept: 'application/json',
        appKey: skAppKey,
      },
    };
    axios
      .request(options1)
      .then((res) => {
        setLocation(
          `${res.data.addressInfo.city_do} ${res.data.addressInfo.gu_gun}`
        );
        console.log(res);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const GetList = () => {
    if (location !== '') {
      axios
        .get(`/shelter/search/${location}`, {
          headers: { 'ngrok-skip-browser-warning': '111' },
        })
        .then((res) => {
          setLists(res.data);
          console.log(res.data);
        });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      setloading(true);
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          setlocationX(position.coords.latitude);
          setlocationY(position.coords.longitude);
          await GetCity(position.coords.latitude, position.coords.longitude);
          await GetList();
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
