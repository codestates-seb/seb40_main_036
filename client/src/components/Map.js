import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import GreenOlive from './../img/locationDotSolidGreen.svg';
import YellowOlive from './../img/locationDotSolidYellow.svg';
import RedOlive from './../img/locationDotSolidRed.svg';
import Circle from './../img/circleSolid.svg';
import SideNav from '../components/SideNav';
import axios from 'axios';
import gyeongi from '../static/gyeongi.json';

const { kakao } = window;
const skAppKey = 'l7xx846db5f3bc1e48d29b7275a745d501c8';

const Map = (props) => {
  const [open, setopen] = useState(false);
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [now, setNow] = useState(0);
  const [capacity, setCapacity] = useState('');
  const [shelterId, setShelterId] = useState('');
  const [apiRoutes, setApiRoutes] = useState([]);
  const Mapping = async () => {
    const fetchRoute2 = (routestartX, routestartY, routeendX, routeendY) => {
      const options = {
        method: 'POST',
        url: 'https://apis.openapi.sk.com/tmap/routes/pedestrian',
        params: { version: '1', callback: 'function' },
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          appKey: skAppKey,
        },
        data: {
          startX: routestartX,
          startY: routestartY,
          angle: 20,
          speed: 30,
          endPoiId: '10001',
          endX: routeendX,
          endY: routeendY,
          startName: '%EC%B6%9C%EB%B0%9C',
          endName: '%EB%8F%84%EC%B0%A9',
        },
      };

      axios
        .request(options)
        .then((res) =>
          setApiRoutes(
            res.data.features
              .filter((x) => x.geometry.type === 'Point')
              .map(
                (x) =>
                  new kakao.maps.LatLng(
                    x.geometry.coordinates[1],
                    x.geometry.coordinates[0]
                  )
              )
          )
        )
        .catch(function (error) {
          console.error(error);
        });
    };
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(props.x, props.y),
      level: 5,
    };
    var map = await new kakao.maps.Map(container, options);
    const reserve = await axios
      .get('/reservationInfo/reservationInfos')
      .catch((err) => console.log(err));
    const reservationInfos = reserve.data;

    const lists =
      gyeongi &&
      gyeongi.map((x) => {
        let obj = {};
        obj['title'] = x.shelter_name;
        obj['latlng'] = new kakao.maps.LatLng(x.y, x.x);
        reservationInfos[x.shelter_id - 1].reservedNum > 0
          ? (obj['now'] = reservationInfos[x.shelter_id - 1]['reservedNum'])
          : (obj['now'] = 0);
        //obj['now'] = Math.floor(Math.random() * x.capacity);

        obj['capacity'] = x.capacity;
        obj['shelterId'] = x.shelter_id;
        return obj;
      });

    var polyline = new kakao.maps.Polyline({
      path: apiRoutes, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: '#FFAE00', // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일입니다
    });
    const listsGreen = lists.filter(
      (x) => Math.floor(x.capacity * 0.3333) > x.now
    );
    const listsYellow = lists.filter(
      (x) =>
        Math.floor(x.capacity * 0.3333) <= x.now &&
        Math.floor(x.capacity * 0.6666) >= x.now
    );
    const listsRed = lists.filter(
      (x) => Math.floor(x.capacity * 0.6666) < x.now
    );

    var OliveGreen = new kakao.maps.MarkerImage(
      GreenOlive,
      new kakao.maps.Size(31, 35)
    );
    var OliveYellow = new kakao.maps.MarkerImage(
      YellowOlive,
      new kakao.maps.Size(31, 35)
    );
    var OliveRed = new kakao.maps.MarkerImage(
      RedOlive,
      new kakao.maps.Size(31, 35)
    );
    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(props.x, props.y),
      image: new kakao.maps.MarkerImage(Circle, new kakao.maps.Size(15, 15)),
    });

    const fetchRoute = (routestartX, routestartY, routeendX, routeendY) => {
      const options = {
        method: 'GET',
        url: 'https://apis.openapi.sk.com/tmap/routes/distance',
        params: {
          version: '1',
          startX: routestartX,
          startY: routestartY,
          endX: routeendX,
          endY: routeendY,
          reqCoordType: 'WGS84GEO',
          callback: 'function',
        },
        headers: { accept: 'application/json', appKey: skAppKey },
      };
      axios
        .request(options)
        .then((res) => setDistance(res.data.distanceInfo.distance))
        .catch((err) => console.error(err));
    };

    listsGreen.forEach((i) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: i.latlng,
        title: i.title,
        image: OliveGreen,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setopen(true);
        setTitle(marker.getTitle());
        setCapacity(i.capacity);
        setShelterId(i.shelterId);
        setNow(i.now);
        fetchRoute(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
        fetchRoute2(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
      });
    });
    listsYellow.forEach((i) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: i.latlng,
        title: i.title,
        image: OliveYellow,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setopen(true);
        setTitle(marker.getTitle());
        setCapacity(i.capacity);
        setShelterId(i.shelterId);
        setNow(i.now);
        fetchRoute(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
        fetchRoute2(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
      });
    });
    listsRed.forEach((i) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: i.latlng,
        title: i.title,
        image: OliveRed,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setopen(true);
        setTitle(marker.getTitle());
        setCapacity(i.capacity);
        setShelterId(i.shelterId);
        setNow(i.now);
        fetchRoute(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
        fetchRoute2(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
      });
    });
    polyline.setMap(map);
    props.setloading(false);
  };

  useEffect(() => {
    Mapping();
  }, [props.x, props.y, apiRoutes]);

  return (
    <>
      {open && (
        <SideNav
          setopen={setopen}
          title={title}
          distance={distance}
          capacity={capacity}
          shelterId={shelterId}
          now={now}
        />
      )}
      <LoadingIcon>
        <FontAwesomeIcon
          icon={solid('spinner')}
          size={'3x'}
          spin={true}
          pulse={true}
          style={props.loading ? { display: 'block' } : { display: 'none' }}
        />
      </LoadingIcon>

      <MapWrapper id="map"></MapWrapper>
      <div id="centerAddr"></div>
    </>
  );
};

export default Map;

const LoadingIcon = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #008505;
  z-index: 5;
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
`;
