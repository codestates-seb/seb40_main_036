import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Marker from './../img/locationDotSolid.svg';
import Circle from './../img/circleSolid.svg';
import SideNav from '../components/SideNav';
import axios from 'axios';

const { kakao } = window;
const skAppKey = 'l7xx846db5f3bc1e48d29b7275a745d501c8';
const Map = (props) => {
  const [open, setopen] = useState(false);
  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');

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
      position: new kakao.maps.LatLng(props.x, props.y),
      image: new kakao.maps.MarkerImage(Circle, new kakao.maps.Size(15, 15)),
    });

    const fetchRoute = async (
      routestartX,
      routestartY,
      routeendX,
      routeendY
    ) => {
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

    console.log(props.lists);
    props.lists.forEach((i) => {
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
        fetchRoute(props.y, props.x, i.x, i.y);
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
        <SideNav setopen={setopen} location={title} distance={distance} />
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
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
`;
