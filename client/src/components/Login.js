import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../img/SalidaLogo.png';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // 초기값 - 이메일, 비밀번호
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    return await axios
      .post(
        '/member/login',
        {
          email: inputId,
          password: inputPw,
        },
        { withCredentials: true }
      )
      .then((res) => {
        // 로그인 성공과 실패시 나오는 데이터를 기반으로 로그인이 성공 했을때만 페이지 이동이 되게 구현
        console.log(res);
        console.log(res.headers); // 응답이 어떻게 오는지 콘솔에서 확인하기 위한 코드
        sessionStorage.setItem('email', inputId);
        sessionStorage.setItem('membeId', res.data.memberId);
        sessionStorage.setItem('name', res.data.name);
        localStorage.setItem('token', res.data.token);
        // localStorage.setItem('authorization', res.headers.authorization); 백엔드에서 토큰 구현하면 로컬스토리지로
        window.location.href = '/'; // 메인 페이지로 이동 (새로고침해서)
      })
      .catch((e) => {
        console.log(e.response.data);
        return '이메일 혹은 비밀번호를 확인하세요.';
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
    padding: 3px;
    font-weight: 500;
    font-size: 16px;
  }
  .idPwInput {
    width: 289px;
    height: 35px;
    left: 571px;
    top: 436px;
    border: 1px solid #bcbcbc;
    border-radius: 3px;
  }
  .idPwBox {
    margin-bottom: 25px;
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
    margin-top: 15px;
    text-align: center;
  }
  .accountExistence a {
    padding-left: 7px;
    color: blue;
  }
`;
const LoginForm = styled.div`
  width: 340px;
  height: 458px;
  margin: 150px auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  .logoImg {
    margin-top: 15px;
    text-align: center;
  }
`;
