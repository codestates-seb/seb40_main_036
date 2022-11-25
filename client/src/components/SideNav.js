import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SideNav = (props) => {
  const [count, setCount] = useState(1);
  const [hide, sethide] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [memberId, setMemberId] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem('email') === null) {
      // sessionStorage 에 email이라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 email이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      setMemberId(sessionStorage.getItem('memberId'));
    }
  }, []);
  const PostReservation = () => {
    axios
      .post('/reservation', {
        memberId: memberId,
        shelterId: props.shelterId,
        num: count,
      })
      .then((res) => console.log(res))
      .then(() => {
        props.setopen(false);
        props.setopen2(true);
        props.setmessage('예약이 완료되었습니다.');
      })
      .catch(() => {
        props.setopen(false);
        props.setopen2(true);
        props.setmessage('오류가 발생하였습니다.새로고침해주세요.');
      });
  };
  return (
    <SideWrapper className={hide === true ? 'hide' : ''}>
      <div className="d-flex">
        <div className="ta-right">
          <FontAwesomeIcon
            icon={solid('xmark')}
            onClick={() => props.setopen(false)}
          />
        </div>
        <div className="pt128">
          <div className="mb8 ta-center">
            {(props.distance / 1000).toFixed(1)} km
          </div>
          <div className="mb8 ta-center bold">{props.title}</div>
          <div className="mb8 ta-center">
            {props.now}/{props.capacity}
          </div>
          <div className="mb8 ta-center reservation">
            <FontAwesomeIcon icon={regular('user')} />
            <div className={count > 0 ? 'minus' : 'plus'}>
              {isLogin && count > 0 ? (
                <button onClick={() => setCount(count - 1)}>
                  <FontAwesomeIcon icon={solid('minus')} />
                </button>
              ) : null}
              <p>{count}</p>
              {isLogin && count < props.capacity - props.now ? (
                <button onClick={() => setCount(count + 1)}>
                  <FontAwesomeIcon icon={solid('plus')} />
                </button>
              ) : null}
            </div>
          </div>
          {isLogin && count < props.capacity - props.now + 1 ? (
            <div className="reservationtext green">예약이 가능합니다.</div>
          ) : isLogin ? (
            <div className="reservationtext red">
              예약가능인원보다 많습니다. 다른 대피소를 이용해주세요.
            </div>
          ) : (
            <div className="reservationtext red">
              비회원은 이용하실 수 없습니다.
            </div>
          )}
          {isLogin && count < props.capacity - props.now + 1 && 0 < count ? (
            <button className="reservation" onClick={PostReservation}>
              예약하기
            </button>
          ) : (
            <button className="reservation disabled">예약하기</button>
          )}
        </div>
      </div>
      <ArrowWrapper onClick={() => sethide(!hide)}>
        {hide && <FontAwesomeIcon icon={solid('chevron-right')} />}
        {!hide && <FontAwesomeIcon icon={solid('chevron-left')} />}
      </ArrowWrapper>
    </SideWrapper>
  );
};
export default SideNav;

const SideWrapper = styled.aside`
  position: relative;
  left: 0;
  max-width: 400px;
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  background: white;
  padding: 8px 16px;
  z-index: -1;
  font-size: 24px;
  box-shadow: 5px 0 5px rgb(0 0 0/25%);
  transition: 0.5s ease all;

  .d-flex {
    display: flex;
    flex-direction: column;
  }
  .ta-right {
    text-align: right;
  }
  .ta-center {
    text-align: center;
  }
  .pt128 {
    padding-top: 128px;
  }
  .mb8 {
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
  .bold {
    font-weight: bold;
  }
  div.reservationtext {
    font-size: 14px;
    text-align: center;
    margin-bottom: 8px;
    &.red {
      color: #dc3545;
    }
    &.green {
      color: #28a745;
    }
  }
  div.reservation {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 20px auto;
    align-items: center;

    > svg {
      margin-right: 16px;
    }
    > div {
      display: flex;
      align-items: center;
      flex: 1 0 auto;
      &.plus {
        justify-content: right;
      }
      button,
      p {
        flex: 0 1 33.3333%;
      }
    }
    button {
      padding: 10px;
      border-radius: 50%;
      border: 2px solid black;
      background: white;
    }
    p {
      width: 30px;
    }
  }
  button.reservation {
    background: #c24c4c;
    border-radius: 5px;
    padding: 24px 36px;
    border: none;
    color: white;
    width: 100%;
    font-weight: 600;
    &.disabled {
      background: #c77d7d;
    }
  }
  &.hide {
    left: -400px;
  }
`;
const ArrowWrapper = styled.div`
  position: relative;
  width: 25px;
  height: 80px;
  display: flex;
  align-items: center;
  border-radius: 0 4px 4px 0;
  border-left: none;
  background: white;
  box-shadow: 5px 0 5px rgb(0 0 0/25%);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -25px;
  cursor: pointer;
`;
