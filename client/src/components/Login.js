import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../img/SalidaLogo.png';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  // 초기값 - 이메일, 비밀번호
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  // 오류메세지 상태
  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = (event) => {
    event.preventDefault();
    if (inputId === '' && inputPw === '') {
      Swal.fire({
        icon: 'error',
        title: '로그인 실패!',
        text: '이메일과 비밀번호 먼저 입력하세요!',
      });
    }
    if (inputId === '') {
      return setIdMessage('아이디를 입력하세요');
    } else if (inputPw === '') {
      return setPasswordMessage('비밀번호를 입력하세요');
    }

    axios
      .post(
        '/api/member/login',
        {
          email: inputId,
          password: inputPw,
        },
        { withCredentials: true }
      )
      .then((res) => {
        // 로그인 성공과 실패시 나오는 데이터를 기반으로 로그인이 성공 했을때만 페이지 이동이 되게 구현
        console.log(res);
        localStorage.setItem('email', inputId);
        localStorage.setItem('memberId', res.data.memberId);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('token', res.data.token);
        window.location.href = '/'; // 메인 페이지로 이동 (새로고침해서)
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: '이메일 또는 비밀번호를 잘못 입력했습니다',
          text: '입력하신 내용을 다시 확인해주세요.',
          width: '40em',
        });
      });
  };

  return (
    <LoginForm>
      <div className="loginForm">
        <div className="logoImg">
          <img className="logoImg" src={Logo} alt="logo" />
        </div>
        <LoginInput>
          <form className="loginInput">
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                이메일
              </label>
              <div>
                <input
                  className="idPwInput"
                  type="text"
                  id="idWrite"
                  value={inputId}
                  onChange={onChangeId}
                />
              </div>
              <div className="msgEmail">{idMessage}</div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="pwWrite">
                비밀번호
              </label>
              <div>
                <input
                  className="idPwInput"
                  type="password"
                  id="pwWrite"
                  value={inputPw}
                  onChange={onChangePw}
                />
              </div>
              <div className="msgPw">{passwordMessage}</div>
            </div>
            <button onClick={onClickLogin}>로그인</button>
            <div className="accountExistence">
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </div>
          </form>
        </LoginInput>
      </div>
    </LoginForm>
  );
};

export default Login;

const LoginInput = styled.div`
  .loginInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
  }
  .idPwText {
    display: flex;
    padding-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
  }
  .idPwInput {
    width: 350px;
    height: 35px;
    left: 571px;
    top: 436px;
    border: 1px solid #bcbcbc;
    border-radius: 3px;
  }
  .idPwBox {
    margin-bottom: 25px;
  }
  .msgEmail {
    padding-top: 5px;
    font-size: 12px;
    color: red;
    font-weight: 450;
  }
  .msgPw {
    padding-top: 5px;
    font-size: 12px;
    color: red;
    font-weight: 450;
  }
  button {
    color: white;
    font-weight: 600;
    width: 289px;
    height: 50px;
    left: 571px;
    top: 621px;
    background: #008505;
    border-radius: 3px;
    margin-top: 10px;
  }
  .accountExistence {
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }
  .accountExistence a {
    padding-left: 7px;
    color: blue;
  }
`;
const LoginForm = styled.div`
  width: 400px;
  height: 100%;
  margin: 150px auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  .logoImg {
    margin-top: 15px;
    text-align: center;
  }
`;
