import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [memberId, setMemberId] = useState(1);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [reservationInfo, setReservationInfo] = useState([]);
  const [shelterId, setShelterId] = useState(1);
  const [shelter, setShelter] = useState('');
  const [err, setErr] = useState(false);

  const fetchUser = () => {
    axios
      .get('/api/reservation/member/' + memberId, {
        headers: {
          'ngrok-skip-browser-warning': '69420',
        },
      })
      .then((res) => {
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

  useEffect(() => {
    if (localStorage.getItem('email') !== null) {
      setIsLogin(true);
      setMemberId(localStorage.getItem('memberId'));
      setUserName(localStorage.getItem('name'));
      setUserEmail(localStorage.getItem('email'));
    }
    fetchUser();
    !isLogin &&
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
  }, []);
  useEffect(() => {
    fetchShelter();
  }, [reservationInfo]);

  return (
    <>
      <MypageWrapper>
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
        <div id="reservationInfo">
          <h2 className="bold title">현재 예약중인 대피소</h2>
          {err ? (
            <div className="d-flex my">예약 내역이 없습니다.</div>
          ) : (
            <>
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
            </>
          )}
        </div>
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

  #reservationInfo,
  #info {
    padding: 8px;
  }
  & {
    .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    }
  }
`;
