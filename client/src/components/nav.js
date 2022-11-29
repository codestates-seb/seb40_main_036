import styled from 'styled-components';
import Logo from './../img/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
const Nav = () => {
  const [Ishide, setIsHide] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogout = () => {
    localStorage.clear(); // 로컬스토리지 안에 있는 모든 데이터를 삭제해줌
    // 로그인페이지로 이동(새로고침)
    window.location.href = '/login';
  };
  useEffect(() => {
    if (localStorage.getItem('email') === null) {
      // localStorage 에 email이라는 key 값으로 저장된 값이 없다면
    } else {
      // localStorage 에 email이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  }, []);
  return (
    <Header>
      <div>
        <div className="navbar flex">
          <div className="navbar-logo flex" id="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className={`navbar-list ${Ishide ? 'sm-hide' : ''}`}>
            <ul>
              <li>
                <Link to="/map">대피소 예약하기</Link>
              </li>
              <li>
                <Link to="/stuffList">비품 현황</Link>
              </li>
              <li>
                <Link to="/share">물품 나눔</Link>
              </li>
              <li>
                <Link to="/review">대피소 후기</Link>
              </li>
              <li>
                <Link to="Tips">재난별 대피요령</Link>
              </li>
            </ul>
            <ul>
              {isLogin ? (
                <li>
                  <Link onClick={onClickLogout}>로그아웃</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="responsive-bar sm-dblock">
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
export default Nav;

const Header = styled.header`
  position: relative;
  height: 50px;

  display: flex;
  justify-content: center;
  .sm-dblock {
    display: none;
    ${tablet} {
      display: block;
      padding: 12px 16px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  > div {
    background: white;
    border-bottom: 4px solid #008505;
    width: 100%;
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
    ${tablet} {
      justify-content: space-between;
      align-items: baseline;
      flex-direction: column;
    }
    .navbar-logo {
      align-items: center;
      padding-right: 50px;
      img {
        max-height: 33.5px;
      }
    }
    .navbar-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${tablet} {
        &.sm-hide {
          display: none;
        }
        flex-direction: column;
        align-items: baseline;
        ul {
          display: flex;
          flex-direction: column;
          li {
            padding: 4px 0;
          }
        }
      }
    }
    .navbar-member {
      ${tablet} {
        display: none;
      }
    }

    li {
      list-style: none;
      flex: 1 0 auto;
    }
    a {
      padding: 4px 16px;
    }
    li,
    a {
      color: #666;
      text-decoration: none;
      font-weight: 400;
      display: inline-block;
      border-radius: 0.75rem;
      ${tablet} {
        font-size: 13px;
      }
    }
    ul a:hover {
      color: black;
    }
  }
`;
