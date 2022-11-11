import { useEffect } from 'react';

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
  return (
    <div
      id="TMapApp"
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
      }}
    />
  );
};
export default Main;
