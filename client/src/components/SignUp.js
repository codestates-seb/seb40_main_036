import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../img/SalidaLogo.png';
import { useState, useEffect } from 'react';

const SignUP = () => {
  const [hyphen, setHyphen] = useState('');

  const onChangeHyphen = (e) => {
    const regex = /^[0-9\b -]{0,13}$/; //숫자와 하이픈만 입력가능 길이는 13자까지라는 의미
    if (regex.test(e.target.value)) {
      setHyphen(e.target.value);
    }
  };
  useEffect(() => {
    if (hyphen.length === 10) {
      setHyphen(hyphen.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')); // 000-000-0000 이렇게 입력됨 혹시나 있을 10자리 번호 입력시
    }
    if (hyphen.length === 13) {
      setHyphen(
        hyphen.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') //000-0000-0000 이렇게 입력됨
      );
    }
  }, [hyphen]);
  return (
    <SignUpForm>
      <div className="signUpForm">
        <div className="logoImg">
          <img className="logoImg" src={Logo} alt="logo" />
        </div>
        <SignUpInput>
          <form className="signUpInput">
            <div className="idPwBox">
              <label className="idPwText" htmlFor="nameWrite">
                이름
              </label>
              <div>
                <input className="idPwInput" type="text" id="nameWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="numWrite">
                전화번호
              </label>
              <div>
                <input
                  className="idPwInput"
                  type="text"
                  id="numWrite"
                  onChange={onChangeHyphen}
                  value={hyphen}
                />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="emailWrite">
                이메일
              </label>
              <div>
                <input className="idPwInput" type="text" id="emailWrite" />
              </div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                비밀번호
              </label>
              <div>
                <input className="idPwInput" type="password" id="idWrite" />
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .logoImg {
    margin-top: 15px;
    text-align: center;
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
    text-align: center;
  }
  .accountExistence a {
    padding-left: 7px;
    color: blue;
  }
`;
