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
            <h1 className="wow fadeInRight font-light">
              재난으로 부터 <span className="font-bold">[살리다]</span>
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              [살리다]는 지진, 재난, 압사를 대비하여 인근의 지진대피소를
              안내해주는 웹 서비스 입니다.
              <br />
              스페인어로 출구는 Salida라고 합니다. 한국말로 ‘살리다’와 같은
              어감으로 선한 영향력 행사를 위해 프로젝트명을 선정하였습니다.
            </p>
            <div className="btn-group">
              <a
                href="https://github.com/codestates-seb/seb40_main_036"
                target="_blank"
                className="wow flipInX btn"
                data-wow-delay=".6s"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://github.com/codestates-seb/seb40_main_036"
                target="_blank"
                className="wow flipInX btn"
                data-wow-delay=".6s"
                rel="noreferrer"
              >
                Notion
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrapper">
        <div className="subWrapper">
          <div className="fd-column ta-center">
            <h1 className="wow fadeInRight">Hello World</h1>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat
              orci, ullamcorper vitae tempus ac, luctus vitae neque. Class
              aptent taciti sociosqu ad litora torquent.
            </p>
            <div className="btn-group">
              <button className="wow flipInX btn" data-wow-delay=".6s">
                GitHub
              </button>
              <button className="wow flipInX btn" data-wow-delay=".6s">
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
  .font-light {
    font-weight: 400;
  }
  .font-bold {
    font-weight: 900;
  }
  .Wrapper:nth-child(odd) {
    background: lightblue;
  }
  .Wrapper:nth-child(even) {
    ${mobile} {
      .subWrapper {
        flex-direction: column-reverse;
      }
    }
  }
  .Wrapper {
    padding: 50px 0;
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
    justify-content: center;
    ${mobile} {
      flex-direction: column;
    }
    > div {
      flex: 0 1 50%;
      padding: 50px;
      ${tablet} {
        padding: 25px;
      }
    }
    .imgWrapper {
      flex: 0 1 25%;
      display: flex;
      justify-content: center;
      ${tablet} {
        flex: 0 1 50%;
      }
    }
  }
  .btn-group {
    margin-top: 25px;
    .btn {
      display: inline-block;
      border: 0;
      outline: 0;
      background: transparent;
      border: 2px solid black;
      border-radius: 0.25em;
      padding: 0.25em 0.5em;
      margin: 0 0.25em;
      text-decoration: none;
      color: inherit;
      &:hover {
        background: rgba(0, 0, 0, 25%);
      }
    }
  }
`;
