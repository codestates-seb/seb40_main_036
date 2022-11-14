import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const { kakao } = window; // eslint-disable-line no-unused-vars

const Map = (props) => {
  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new window.kakao.maps.LatLng(props.x, props.y),
      level: 3,
    };
    const Mapping = async () => {
      await new window.kakao.maps.Map(container, options);
      props.setloading(false);
    };
    Mapping();
  }, [props.x, props.y]);

  return (
    <>
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
  z-index: -1;
`;
