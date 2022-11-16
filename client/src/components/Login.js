import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../img/SalidaLogo.png';

const Login = () => {
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
                <input className="idPwInput" type="text" id="idWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="pwWrite">
                비밀번호
              </label>
              <div>
                <input className="idPwInput" type="password" id="pwWrite" />
              </div>
            </div>
            <button>로그인</button>
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
