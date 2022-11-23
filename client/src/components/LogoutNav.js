import styled from 'styled-components';
import Logo from './../img/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars

const LogoutNav = () => {
  const [Ishide, setIsHide] = useState(true);

  const onClickLogout = () => {
    sessionStorage.clear(); // 세션스토리지 안에 있는 모든 데이터를 삭제해줌
    // 로그인페이지로 이동(새로고침)
    window.location.href = '/login';
  };
  return (
    <Header>
      <div>
        <div
          className="navbar flex"
          onMouseEnter={() => {
            setIsHide(false);
          }}
          onMouseLeave={() => {
            setIsHide(true);
          }}
        >
          <div className="navbar-logo flex" id="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-list flex">
            <ul className="flex">
              <li className="nav-title">대피요령</li>
              <li className="nav-title">비품</li>
              <li className="nav-title">커뮤니티</li>
            </ul>
          </div>
          <div className="navbar-member flex">
            <ul className="flex">
              <li>
                <Link onClick={onClickLogout}>로그아웃</Link>
                {/*로그아웃 버튼*/}
              </li>
            </ul>
          </div>
          {!Ishide && (
            <div className="navbar-slide">
              <ul className="">
                <li className="sm-dblock">대피요령</li>
                <li>
                  <Link to="Tips">재난별 대피요령</Link>
                </li>
              </ul>
              <ul>
                <li className="sm-dblock">비품</li>
                <li>
                  <Link to="/equipment">비품 현황</Link>
                </li>
              </ul>
              <ul>
                <li className="sm-dblock">커뮤니티</li>
                <li>
                  <Link to="/share">물품 나눔</Link>
                </li>
                <li>
                  <Link to="/review">대피소 후기</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="responsive-bar">
            {Ishide && (
              <FontAwesomeIcon
                icon={solid('bars')}
                onClick={() => setIsHide(false)}
              />
            )}
            {!Ishide && (
              <FontAwesomeIcon
                icon={solid('x')}
                onClick={() => setIsHide(true)}
              />
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default LogoutNav;

const Header = styled.header`
  position: relative;
  height: 50px;

  display: flex;
  justify-content: center;
  > div {
    background: white;
    border-bottom: 4px solid #008505;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 1;
  }

  .flex {
    display: flex;
  }
  .navbar {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    height: 46px;
    ${tablet} {
      justify-content: space-between;
      align-items: center;
    }
    .navbar-logo {
      width: 200px;
      align-items: center;
      padding-right: 100px;
      img {
        width: 100px;
      }
    }
    .navbar-list {
      flex: 1 1 auto;
      ${tablet} {
        display: none;
      }
      li.nav-title {
        padding: 4px 24px;
      }
      li {
        position: relative;

        ul {
          display: none;
          position: absolute;
          flex-direction: column;
          background: white;
          top: 55px;
          border: 4px solid #008505;
          border-top: none;
        }
      }
    }
    .navbar-member {
      ${tablet} {
        display: none;
      }
    }
    .navbar-slide {
      position: absolute;
      z-index: 1;
      top: 46px;
      left: 196px;
      right: 0;
      background: white;
      display: flex;
      border: 4px solid #008505;
      border-top: none;
      border-bottom-left-radius: 15px;
      padding-bottom: 8px;
      ul {
        width: 120px;
      }
      .sm-dblock {
        display: none;
      }
      ${tablet} {
        left: 0;
        border-right: 0;
        border-left: 0;
        border-radius: 0;
        flex-direction: column;
        .sm-dblock {
          display: block;
          font-weight: 600;
          font-size: 16px;
          margin-top: 8px;
        }
      }
    }
    .responsive-bar {
      display: none;
      margin-right: 24px;
      ${tablet} {
        display: block;
      }
    }
    ul {
      align-items: center;
      ${tablet} {
        align-items: baseline;
        flex-direction: column;
        display: flex;
      }
    }
    ul.info {
      flex: 1 0 auto;
      text-align: right;
      li {
        width: 70px;
      }
    }
    li {
      list-style: none;
      flex: 1 0 auto;
      padding: 4px 16px;
    }
    a {
      padding: 4px 8px;
    }
    li,
    a {
      color: #666;
      text-decoration: none;
      font-weight: 400;
      display: inline-block;
      font-size: 13px;
      width: 120px;
      border-radius: 0.75rem;
    }
    ul a:hover {
      color: black;
    }
    .navbar-member a {
      width: 70px;
    }
  }
`;
