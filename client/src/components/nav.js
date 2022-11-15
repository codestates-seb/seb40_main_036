import styled from 'styled-components';
import Logo from './../img/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [Ishide, setIsHide] = useState(true);
  return (
    <Header>
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
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-list flex">
          <ul className="flex">
            <li>
              <a href="...">대피 요령</a>
            </li>
            <li>
              <a href="...">비품</a>
            </li>
            <li>
              <a href="...">커뮤니티</a>
            </li>
          </ul>
        </div>
        <div className="navbar-member flex">
          <ul className="flex">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </ul>
        </div>
        {!Ishide && (
          <div className="navbar-slide">
            <ul className="">
              <li>
                <a href="...">재난별 대피요령</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="...">비품 현황</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="...">물품 나눔</a>
              </li>
              <li>
                <a href="...">대피소 후기</a>
              </li>
            </ul>
            <ul className="info">
              <li>
                <a href="...">지진 정보</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Header>
  );
};
export default Nav;

const Header = styled.header`
  position: relative;
  height: 50px;
  background: white;
  border-bottom: 4px solid #008505;
  display: flex;
  justify-content: center;
  .flex {
    display: flex;
  }
  .navbar {
    margin: 0 auto;
    position: fixed;
    width: 100%;
    max-width: 1440px;
    height: 46px;
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
      border-right: none;
      border-bottom-left-radius: 15px;
    }
    ul {
      align-items: center;
    }
    ul.info {
      flex: 1 0 auto;
      text-align: right;
      a {
        width: 70px;
      }
    }
    li {
      list-style: none;
      flex: 1 0 auto;
      padding: 4px 16px;
    }
    a {
      color: black;
      text-decoration: none;
      font-weight: 400;
      display: inline-block;
      font-size: 13px;
      width: 120px;
      padding: 4px 8px;
      border-radius: 0.75rem;
    }
    a:hover {
      background: lightgray;
    }
    .navbar-member a {
      width: 70px;
    }
  }
`;
