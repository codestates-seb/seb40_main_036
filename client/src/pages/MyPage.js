import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import GreenOlive from './../img/locationDotSolidGreen.svg';
import Logo from './../img/logo.png';

const { kakao } = window;
const MyPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [reservationInfo, setReservationInfo] = useState([]);
  const [shelterId, setShelterId] = useState(1);
  const [shelter, setShelter] = useState('');
  const [err, setErr] = useState(false);

  const fetchUser = () => {
    axios
      .get('/api/reservation/member/' + localStorage.getItem('memberId'))
      .then((res) => {
        console.log(res);
        setReservationInfo(res.data.data);
        setShelterId(res.data.data.shelterId);
      })
      .catch(() => setErr(true));
  };
  const fetchShelter = () => {
    axios
      .get('/api/shelter/' + shelterId)
      .then((res) => setShelter(res.data.data));
  };
  const deleteReservation = () => {
    Swal.fire({
      icon: 'warning',
      title: '예약 삭제',
      text: '현재 예약을 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
      allowOutsideClick: false,
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete('/api/reservation/' + reservationInfo.reservationId)
          .then((window.location.href = '/'));
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem('email') !== null) {
      setIsLogin(true);
      setUserName(localStorage.getItem('name'));
      setUserEmail(localStorage.getItem('email'));
    } else {
      setIsLogin(false);
    }
    fetchUser();
  }, []);
  useEffect(() => {
    if (isLogin === false) {
      Swal.fire({
        icon: 'warning',
        title: '로그인 오류',
        text: '로그인 정보가 없습니다.',
        confirmButtonText: '메인으로 이동',
        allowOutsideClick: false,
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.href = '/';
        }
      });
    }
  }, [isLogin]);
  useEffect(() => {
    fetchShelter();
  }, [reservationInfo]);
  useEffect(() => {
    var mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(Number(shelter.y), Number(shelter.x)),
        level: 3,
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc = GreenOlive,
      imageSize = new kakao.maps.Size(64, 69);

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    var markerPosition = new kakao.maps.LatLng(
      Number(shelter.y),
      Number(shelter.x)
    );

    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  }, [shelter.x, shelter.y]);

  return (
    <>
      <MypageWrapper>
        <div className="d-flex jc-right">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div id="info">
          <h2 className="bold title">MyPage</h2>
          <div className="d-flex my">
            <span className="bold">이름</span>
            <span>{userName}</span>
          </div>
          <div className="d-flex my">
            <span className="bold">이메일</span>
            <span>{userEmail}</span>
          </div>
        </div>

        {err ? (
          <div id="reservationInfo">
            <h2 className="bold title">현재 예약중인 대피소</h2>
            <div className="d-flex my">예약 내역이 없습니다.</div>
          </div>
        ) : (
          <>
            <div id="map"></div>
            <div id="reservationInfo">
              <h2 className="bold title">현재 예약중인 대피소</h2>
              <div className="d-flex jc-right">
                <button onClick={deleteReservation}>
                  <FontAwesomeIcon icon={solid('trash-can')} /> 삭제
                </button>
              </div>
              <div className="d-flex my">
                <span className="bold">예약일자</span>
                <span>{reservationInfo.reservationCreated}</span>
              </div>
              <div className="d-flex my">
                <span className="bold">대피소명</span>
                <span>{shelter.shelterName}</span>
              </div>
              <div className="d-flex my">
                <span className="bold">예약인원</span>
                <span>{reservationInfo.num}</span>
              </div>
            </div>
          </>
        )}
      </MypageWrapper>
    </>
  );
};
export default MyPage;

const MypageWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 16px auto;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  .logo {
    width: 100%;
    max-width: 100px;
    margin-top: 16px;
    margin-right: 16px;
  }
  #map {
    width: 100%;
    height: 300px;
  }
  #reservationInfo,
  #info {
    padding: 16px;
  }
  & {
    .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .jc-right {
      justify-content: end;
      button {
        background: #dc3545;
        padding: 8px 16px;
        border: 0;
        outline: 0;
      }
    }
    .my {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .bold {
      font-weight: bold;
    }
    .title {
      margin-top: 16px;
      margin-bottom: 16px;
      text-align: center;
    }
  }
`;
