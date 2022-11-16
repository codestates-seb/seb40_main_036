import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './../img/SalidaLogo.png';
import { useState, useEffect } from 'react';

const SignUP = () => {
  const [inputId, setInputId] = useState('');
  const [hyphen, setHyphen] = useState('');
  const [inputPw, setInputPw] = useState('');

  // 오류메세지 상태
  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setInputId(currentId);
    const idRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage('이메일의 형식이 올바르지 않습니다!');
    } else {
      setIdMessage('사용 가능한 이메일 입니다.'); // 아직은 이메일 형식만 맞으면 이러한 메세지가 뜨게 설정 나중에 중복여부로 구현 예정
    }
  };

  const onChangeHyphen = (e) => {
    const regex = /^[0-9\b -]{0,13}$/; //숫자와 하이픈만 입력가능 길이는 13자까지라는 의미
    if (regex.test(e.target.value)) {
      setHyphen(e.target.value);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setInputPw(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'
      );
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
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
                <input
                  className="idPwInput"
                  type="text"
                  id="emailWrite"
                  onChange={onChangeId}
                  value={inputId}
                />
              </div>
              <div>{idMessage}</div>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="idWrite">
                비밀번호
              </label>
              <div>
                <input
                  className="idPwInput"
                  type="password"
                  id="idWrite"
                  onChange={onChangePassword}
                  value={inputPw}
                />
              </div>
              <div>{passwordMessage}</div>
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
  width: 340px;
  height: 579px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 90px auto;

  .logoImg {
    margin-top: 15px;
    text-align: center;
  }
`;

const SignUpInput = styled.div`
  .signUpInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
