import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUP = () => {
  return (
    <SignUpForm>
      <div className="signUpForm">
        <div className="logoImg">
          <img src="img/SalidaLogo.png" alt="logo" />
        </div>
        <SignUpInput>
          <form className="signUpInput">
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                이름
              </label>
              <div>
                <input className="idPwInput" type="text" id="idWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="pwWrite">
                이메일
              </label>
              <div>
                <input className="idPwInput" type="password" id="pwWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                아이디
              </label>
              <div>
                <input className="idPwInput" type="text" id="idWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                비밀번호
              </label>
              <div>
                <input className="idPwInput" type="text" id="idWrite" />
              </div>
            </div>
            <button>회원가입</button>
            <div className="accountExistence">
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </div>
          </form>
        </SignUpInput>
      </div>
    </SignUpForm>
  );
};

export default SignUP;

const SignUpForm = styled.div`
  .signUpForm {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 340px;
    height: 600px;
    left: 550px;
    top: 262px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logoImg {
    margin-top: 15px;
  }
`;

const SignUpInput = styled.div`
  .signUpInput {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 20px;
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
    margin-bottom: 20px;
  }
  button {
    margin-top: 15px;
    width: 289px;
    height: 56px;
    left: 583px;
    top: 694px;
    color: white;
    font-weight: 600;
    background: #008505;
    border-radius: 3px;
  }
  .accountExistence {
    margin-top: 15px;
  }
  .accountExistence a {
    padding-left: 7px;
    color: blue;
  }
`;
