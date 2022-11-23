import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Marker from './../img/locationDotSolid.svg';
import Circle from './../img/circleSolid.svg';
import SideNav from '../components/SideNav';
import axios from 'axios';
import Incheon from '../static/Incheon.json';

const { kakao } = window;
const skAppKey = 'l7xx846db5f3bc1e48d29b7275a745d501c8';
var geocoder = new kakao.maps.services.Geocoder();

const lists = Incheon.map((x) => {
  let obj = {};
  obj['title'] = x.shelter_name;
  geocoder.addressSearch(x.geolocation, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      obj['latlng'] = new kakao.maps.LatLng(result[0].y, result[0].x);
    }
  });
  obj['now'] = Math.floor(Math.random() * x.capacity); //나중에 바꿔야댐
  obj['capacity'] = x.capacity;
  obj['shelterId'] = x.shelter_id;
  return obj;
});
const Map = (props) => {
  const [open, setopen] = useState(false);
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [now, setNow] = useState(0);
  const [capacity, setCapacity] = useState('');
  const [shelterId, setShelterId] = useState('');

  const Mapping = async () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(props.x, props.y),
      level: 5,
    };
    var map = await new kakao.maps.Map(container, options);

    var markerImage = new kakao.maps.MarkerImage(
      Marker,
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

    lists.forEach((i) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: i.latlng,
        title: i.title,
        image: markerImage,
        clickable: true,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setopen(true);
        setTitle(marker.getTitle());
        setCapacity(i.capacity);
        setShelterId(i.shelterId);
        setNow(i.now);
        fetchRoute(props.y, props.x, i.latlng.getLng(), i.latlng.getLat());
      });
    });

    props.setloading(false);
  };
  useEffect(() => {
    Mapping();
  }, [props.x, props.y]);

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
      <LoadingIcon
        icon={solid('spinner')}
        size={'3x'}
        spin={true}
        pulse={true}
        style={props.loading ? { display: 'block' } : { display: 'none' }}
      />
      <MapWrapper id="map"></MapWrapper>
      <div id="centerAddr"></div>
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
  z-index: 5;
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
`;
