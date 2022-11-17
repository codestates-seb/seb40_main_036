import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Incheon from './../static/Incheon.json';
import Marker from './../img/locationDotSolid.svg';
import Circle from './../img/circleSolid.svg';
import SideNav from '../components/SideNav';
import axios from 'axios';

const { kakao } = window;
var geocoder = new kakao.maps.services.Geocoder();
const dummy = Incheon.map((x) => {
  let obj = {};
  obj['title'] = x.name;
  geocoder.addressSearch(x.geolocation, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      obj['latlng'] = new kakao.maps.LatLng(result[0].y, result[0].x);
      obj['x'] = parseFloat(result[0].x);
      obj['y'] = parseFloat(result[0].y);
    }
  });
  return obj;
});
const skAppKey = 'l7xx846db5f3bc1e48d29b7275a745d501c8';
const Map = (props) => {
  const [open, setopen] = useState(false);
  const [title, setTitle] = useState('');
  const Mapping = async () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(props.x, props.y),
      level: 5,
    };
    let map = await new kakao.maps.Map(container, options);
    var markerImage = new kakao.maps.MarkerImage(
      Marker,
      new kakao.maps.Size(31, 35)
    );
    new kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(props.x, props.y),
      image: new window.kakao.maps.MarkerImage(
        Circle,
        new kakao.maps.Size(15, 15)
      ),
    });
    for (let i = 0; i < dummy.length; i++) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: dummy[i].latlng,
        title: dummy[i].title,
        image: markerImage,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setopen(true);
        setTitle(marker.getTitle());
        fetchRoute(props.y, props.x, dummy[i].x, dummy[i].y);
      });
    }
    props.setloading(false);
  };

  const fetchRoute = (routestartX, routestartY, routeendX, routeendY) => {
    axios
      .post(
        'https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&callback=function',
        {
          startX: routestartX,
          startY: routestartY,
          endX: routeendX,
          endY: routeendY,
          reqCoordType: 'WGS84GEO',
          resCoordType: 'WGS84GEO',
          startName: '%EC%B6%9C%EB%B0%9C',
          endName: '%EB%8F%84%EC%B0%A9',
        },
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            appKey: skAppKey,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    Mapping();
  }, [props.x, props.y]);

  return (
    <>
      {open && <SideNav setopen={setopen} location={title} />}
      <LoadingIcon
        icon={solid('spinner')}
        size={'3x'}
        spin={true}
        pulse={true}
        style={props.loading ? { display: 'block' } : { display: 'none' }}
      />
      <MapWrapper id="map"></MapWrapper>
    </>
  );
};

export default Map;

const LoadingIcon = styled(FontAwesomeIcon)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #008505;
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
`;
