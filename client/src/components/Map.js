import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Incheon from './../static/Incheon.json';
import Marker from './../img/locationDotSolid.svg';
import SideNav from '../components/SideNav';

const { kakao } = window;
var geocoder = new kakao.maps.services.Geocoder();
const dummy = Incheon.map((x) => {
  let obj = {};
  obj['title'] = x.name;
  geocoder.addressSearch(x.geolocation, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      obj['latlng'] = new kakao.maps.LatLng(result[0].y, result[0].x);
    }
  });
  return obj;
});

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
      });
    }
    props.setloading(false);
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
