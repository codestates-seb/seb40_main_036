import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import WOW from 'wowjs';
import Mockup1 from './../img/mobileMockup.png';
import Mockup2 from './../img/pcMockup.png';
import IntroImg1 from './../img/intro1.gif';
import IntroImg2 from './../img/intro2.gif';
import IntroImg3 from './../img/intro3.gif';
import Social from './../img/social-media.png';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars

const OddContents = (props) => {
  return (
    <div className="Wrapper">
      <div className="subWrapper">
        <div className="imgWrapper">
          {props.img &&
            props.img.map((x, i) => (
              <img
                key={i}
                className="wow fadeIn"
                data-wow-delay={`0.${i + 1}s`}
                data-wow-duration="1.5s"
                alt={`Intro Img ${i}`}
                src={x}
              />
            ))}
        </div>
        <div className="fd-column ta-left">
          <h1
            className="wow fadeInRight font-light title"
            data-wow-duration="1.5s"
          >
            {props.title}
          </h1>
          <p
            className="wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration="1.5s"
          >
            {props.paragraph}
          </p>
          {props.extra}
        </div>
      </div>
    </div>
  );
};
const EvenContents = (props) => {
  return (
    <div className="Wrapper">
      <div className="subWrapper">
        <div className="fd-column ta-left">
          <h1
            className="wow fadeInRight font-light title"
            data-wow-duration="1.5s"
          >
            {props.title}
          </h1>
          <p
            className="wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration="1.5s"
          >
            {props.paragraph}
          </p>
          {props.extra}
        </div>
        <div className="imgWrapper even">
          {props.img &&
            props.img.map((x, i) => (
              <img
                key={i}
                className="wow fadeIn"
                data-wow-delay={`0.${i + 1}s`}
                data-wow-duration="1.5s"
                alt="MapImage1"
                src={x}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
const Intro = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <IntroWrapper>
      <OddContents
        img={[Mockup2, Mockup1]}
        title={
          <>
            재난으로 부터 <span className="font-bold">[살리다]</span>
          </>
        }
        paragraph={
          <>
            <span className="font-bold">[살리다]는</span> 지진, 재난, 압사를
            대비하여 인근의 지진대피소를 안내해주는 웹 서비스 입니다.
          </>
        }
        extra={
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
              href="https://www.notion.so/codestates/36-SALIDA-bbb2654a9c56417bbc72db0ad807b891#0b2da0c809da411d8d37965341a33248"
              target="_blank"
              className="wow flipInX btn"
              data-wow-delay=".6s"
              rel="noreferrer"
            >
              Notion
            </a>
          </div>
        }
      />
      <EvenContents
        title={<span className="font-bold">SALIDA?</span>}
        paragraph={
          <>
            스페인어로 출구를 의미하는 [Salida]는 지진 발생 후 지진 대피소로
            모일 때, 특정 지진 대피소에 사람들이 몰려서 발생할 수 있는{' '}
            <span className="font-bold">압사 사고의 위험을 줄이고자</span>{' '}
            원하는 대피소에 몇 명의 인원이 있는지 확인할 수 있는 웹 애플리케이션
            모델을 제안합니다.
          </>
        }
        img={[IntroImg1]}
        extra={
          <div className="btn-group">
            <Link to="/map" className="wow flipInX btn" data-wow-delay=".6s">
              대피소 예약하기
            </Link>
          </div>
        }
      />
      <OddContents
        title={
          <>
            이웃과 함께, <span className="font-bold">대피소후기</span>
          </>
        }
        img={[IntroImg2, Social]}
        paragraph={'우리동네 대피소에는 어떤 후기가 있을까요?'}
        extra={
          <div className="btn-group">
            <Link to="/review" className="wow flipInX btn" data-wow-delay=".6s">
              대피소 후기 보러가기
            </Link>
          </div>
        }
      />
      <EvenContents
        title={
          <>
            우리동네 대피소는? <span className="font-bold">비품확인</span>
          </>
        }
        img={[IntroImg3]}
        paragraph={'우리동네 대피소 비품을 알고싶다면?'}
        extra={
          <div className="btn-group">
            <Link
              to="/stuffList"
              className="wow flipInX btn"
              data-wow-delay=".6s"
            >
              비품확인 보러가기
            </Link>
          </div>
        }
      />
    </IntroWrapper>
  );
};
export default Intro;
const IntroWrapper = styled.div`
  .title {
    font-size: 2.5em;
    margin-bottom: 20px;
    ${tablet} {
      font-size: 2em;
    }
  }
  .font-light {
    font-weight: 200;
  }
  .font-bold {
    font-weight: 600;
  }

  .Wrapper:nth-child(even) {
    ${mobile} {
      .subWrapper {
        flex-direction: column-reverse;
      }
    }
  }
  .Wrapper {
    padding: 70px 0;
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
    align-items: center;
    * {
      word-break: keep-all;
    }
    ${mobile} {
      flex-direction: column;
      align-items: baseline;
    }
    > div {
      flex: 0 1 33.3333%;
      margin: 25px;
      ${tablet} {
        margin: 15px;
      }
    }
    .imgWrapper {
      flex: 0 1 50%;
      display: flex;
      justify-content: center;
      border-radius: 0.25em;
      position: relative;
      ${tablet} {
        flex: 0 1 50%;
      }
      img {
        width: auto;
        max-height: 100%;
        &:nth-child(2) {
          position: absolute;
          width: 25%;
          right: -5%;
          bottom: -5%;
        }
      }
      &.even {
        img:nth-child(2) {
          left: -5%;
          right: auto;
        }
      }
    }
  }
  .btn-group {
    margin-top: 25px;
    .btn {
      display: inline-block;
      border: 0;
      outline: 0;
      background: #008a00;
      border-radius: 0.25em;
      padding: 0.75em 1em;
      margin-right: 0.25em;
      text-decoration: none;
      color: white;

      &:hover {
        background: #005603;
      }
    }
  }
`;
