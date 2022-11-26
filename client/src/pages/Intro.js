import styled from 'styled-components';
import { useEffect } from 'react';
import WOW from 'wowjs';
import MapIcon1 from './../img/mapIcon1.png';
import MapIcon2 from './../img/mapIcon2.png';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
const Intro = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <IntroWrapper>
      <div className="Wrapper">
        <div className="subWrapper">
          <div className="imgWrapper wow flipInY" data-wow-iteration="1">
            <img alt="MapImage1" src={MapIcon1} />
          </div>
          <div className="fd-column ta-center">
            <h2 className="wow fadeInRight">Hello World</h2>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
              orci, ullamcorper vitae tempus ac, luctus vitae neque. Class
              aptent taciti sociosqu ad litora torquent.
            </p>
            <div className="btn-group">
              <button className="wow flipInX" data-wow-delay=".6s">
                GitHub
              </button>
              <button className="wow flipInX" data-wow-delay=".6s">
                Notion
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="subWrapper">
          <div className="fd-column ta-center">
            <h2 className="wow fadeInRight">Hello World</h2>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
              orci, ullamcorper vitae tempus ac, luctus vitae neque. Class
              aptent taciti sociosqu ad litora torquent.
            </p>
            <div className="btn-group">
              <button className="wow flipInX" data-wow-delay=".6s">
                GitHub
              </button>
              <button className="wow flipInX" data-wow-delay=".6s">
                Notion
              </button>
            </div>
          </div>
          <div className="imgWrapper wow flipInY" data-wow-iteration="1">
            <img alt="MapImage1" src={MapIcon2} />
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};
export default Intro;
const IntroWrapper = styled.div`
  .Wrapper:nth-child(odd) {
    background: lightblue;
    p {
      text-align: right;
    }
  }
  .Wrapper {
    padding: 50px 0;
    p {
      text-align: left;
    }
    ${mobile} {
      padding: 25px 0;
    }
  }
  .fd-column {
    flex-direction: column;
  }
  .ta-center {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  display: flex;
  flex-direction: column;
  .subWrapper {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    ${mobile} {
      flex-direction: column;
    }
    > div {
      flex: 0 1 50%;
      padding: 50px;
    }
  }
  .btn-group {
    margin-top: 25px;
    button {
      border: 0;
      outline: 0;
      background: transparent;
      border: 2px solid black;
      border-radius: 0.25em;
      padding: 0.25em 0.5em;
      margin: 0 0.25em;
      &:hover {
        background: lightgray;
      }
    }
  }
`;
