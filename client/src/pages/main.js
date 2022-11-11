import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const Main = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `         
            function initTmap() {
                var map = new Tmapv3.Map("TMapApp", {
                    center: new Tmapv3.LatLng(37.566481622437934,126.98502302169841),
                    width: "100%",
                    height: "100%",
                    zoom:15
                });
            }
            
            initTmap();
       `;
    script.type = 'text/javascript';
    script.async = 'async';
    document.head.appendChild(script);
  }, []);
  const onclickhandle = () => {
    console.log('test');
  };
  return (
    <>
      <MapWrapper id="TMapApp" />
      <Positionrelative>
        <Button
          onclick={onclickhandle}
          text={<FontAwesomeIcon icon={solid('location-crosshairs')} />}
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
    border: 2px solid black;
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
  button:hover {
    background: #005603;
  }
`;
