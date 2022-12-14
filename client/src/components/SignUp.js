import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import Logo from './../img/SalidaLogo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
const SignUP = () => {
  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const [hyphen, setHyphen] = useState(''); // 전화번호

  // 오류메세지 상태
  const [idMessage, setIdMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [hyphenMessage, setHyphenMessage] = useState('');

  // 유효성 검사
  const [isId, setIsId] = useState(false); // eslint-disable-line no-unused-vars
  const [isname, setIsName] = useState(false); // eslint-disable-line no-unused-vars
  const [isPassword, setIsPassword] = useState(false); // eslint-disable-line no-unused-vars
  const [isHyphen, setIsHyphen] = useState(false);

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setInputName(currentName);

    if (currentName.length < 2 || currentName.length > 8) {
      setNameMessage('닉네임은 2글자 이상 8글자 이하로 입력해주세요!');
      setIsName(false);
    } else {
      setNameMessage('사용가능한 닉네임 입니다.');
      setIsName(true);
    }
  };

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setInputId(currentId);
    const idRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage('이메일의 형식이 올바르지 않습니다!');
      setIsId(false);
    } else {
      setIdMessage('중복검사를 눌러주세요!');
      setIsId(true);
    }
  };

  const onChangeHyphen = (e) => {
    setHyphen(e.target.value);
    const regex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    if (!regex.test(hyphen)) {
      setHyphenMessage('전화번호 형식이 올바르지 않습니다!');
      setIsHyphen(false);
    }
    if (regex.test(hyphen) || regex.test(e.target.value)) {
      setHyphenMessage('중복검사를 눌러주세요!');
      setIsHyphen(true);
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
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };

  const navigate = useNavigate();

  const onClickSignUp = (e) => {
    if (inputName === '') {
      setNameMessage('필수 정보입니다.');
    }
    if (inputId === '') {
      setIdMessage('필수 정보입니다.');
    }
    if (inputPw === '') {
      setPasswordMessage('필수 정보입니다.');
    }
    if (hyphen === '') {
      setHyphenMessage('필수 정보입니다.');
    }
    e.preventDefault(); // 새로고침 방지
    axios
      .post('/api/member/join', {
        name: inputName,
        email: inputId,
        password: inputPw,
        phone: hyphen,
      })
      .then((response) => {
        // Handle success.
        console.log(response);
        navigate('/login');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error);
        if (error.response.status === 409) {
          Swal.fire({
            icon: 'error',
            title: '회원가입 실패!',
            text: '이메일 또는 전화번호 중복여부를 확인해주세요!',
            confirmButtonColor: '#008505',
          });
        }
      });
  };

  const onClickCheckNumber = (e) => {
    e.preventDefault();
    axios
      .post('/api/member/join/checkPhone', {
        phone: hyphen,
      })
      .then((response) => {
        console.log(response);
        // console.log(response.data.message);
        if (response.data.message === '사용 가능한 휴대폰 번호 입니다.') {
          setHyphenMessage('사용 가능한 휴대폰 번호 입니다!');
          setIsHyphen(true);
        }
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
        if (error.response.data.message === '이미 가입된 휴대폰 번호입니다.') {
          setHyphenMessage('이미 가입된 휴대폰 번호입니다.');
          setIsHyphen(false);
        }
      });
  };

  const onClickCheckEmail = (e) => {
    e.preventDefault();
    axios
      .post('/api/member/join/checkEmail', {
        email: inputId,
      })
      .then((response) => {
        console.log(response);
        // console.log(response.data.message);
        if (response.data.message === '사용 가능한 이메일 입니다.') {
          setIdMessage('멋진 이메일이네요!');
          setIsId(true);
        }
      })
      .catch((error) => {
        // Handle error.
        console.log(error);
        if (error.response.data.message === '이미 가입된 이메일 입니다.') {
          setIdMessage('이미 가입된 이메일 입니다.');
          setIsId(false);
        }
      });
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
                <input
                  className="idPwInput"
                  type="text"
                  id="nameWrite"
                  onChange={onChangeName}
                  value={inputName}
                />
              </div>
              <MsgNameStyle value={isname}>
                <div className="msgName">{nameMessage}</div>
              </MsgNameStyle>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="numWrite">
                전화번호
              </label>
              <button className="checkNumber" onClick={onClickCheckNumber}>
                중복검사
              </button>
              <div>
                <input
                  className="idPwInput"
                  type="text"
                  id="numWrite"
                  onChange={onChangeHyphen}
                  value={hyphen}
                />
              </div>
              <MsgHyphenStyle value={isHyphen}>
                <div className="msgHyphen">{hyphenMessage}</div>
              </MsgHyphenStyle>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="emailWrite">
                이메일
              </label>
              <button className="checkEmail" onClick={onClickCheckEmail}>
                중복검사
              </button>
              <div>
                <input
                  className="idPwInput"
                  type="text"
                  id="emailWrite"
                  onChange={onChangeId}
                  value={inputId}
                />
              </div>
              <MsgEmailStyle value={isId}>
                <div className="msgEmail">{idMessage}</div>
              </MsgEmailStyle>
            </div>
            <div className="idPwBox">
              <label className="idPwText" htmlFor="emailWrite">
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
              <MsgPwStyle value={isPassword}>
                <div className="msgPw">{passwordMessage}</div>
              </MsgPwStyle>
            </div>
            <button className="signBtn" onClick={onClickSignUp}>
              회원가입
            </button>
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
  width: 400px;
  height: 100%;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 15%) 0px 4px 16px 0px;
  border-radius: 5px;
  margin: 90px auto;
  ${mobile} {
    width: 340px;
  }
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
    display: inline-block;
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
    positon: fixed;
    ${mobile} {
      width: 300px;
    }
  }
  .idPwBox {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .checkNumber {
    display: inline-block;
    width: 80px;
    height: 25px;
    color: white;
    font-weight: 600;
    background: #008505;
    border-radius: 5px;
    margin-left: 5px;
    margin-bottom: 4px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #005603;
    }
  }
  .checkEmail {
    display: inline-block;
    width: 80px;
    height: 25px;
    color: white;
    font-weight: 600;
    background: #008505;
    border-radius: 5px;
    margin-left: 20px;
    margin-bottom: 4px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #005603;
    }
  }
  .signBtn {
    margin-top: 15px;
    width: 289px;
    height: 56px;
    left: 583px;
    top: 694px;
    color: white;
    font-weight: 600;
    width: 280px;
    height: 50px;
    background: #008505;
    border-radius: 3px;
    margin-top: 10px;
    border: none;
    ${mobile} {
      width: 230px;
    }
    cursor: pointer;
    :hover {
      background-color: #005603;
    }
  }
  .accountExistence {
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
  }
  .accountExistence a {
    padding-left: 7px;
    color: blue;
  }
`;

const MsgNameStyle = styled.div`
  .msgName {
    padding-top: 5px;
    font-size: 12px;
    font-weight: 450;
    color: ${(props) => (props.value ? 'green' : 'red')};
  }
`;

const MsgEmailStyle = styled.div`
  .msgEmail {
    padding-top: 5px;
    font-size: 12px;
    font-weight: 450;
    color: ${(props) => (props.value ? 'green' : 'red')};
  }
`;

const MsgPwStyle = styled.div`
  .msgPw {
    padding-top: 5px;
    font-size: 12px;
    font-weight: 450;
    color: ${(props) => (props.value ? 'green' : 'red')};
  }
`;

const MsgHyphenStyle = styled.div`
  .msgHyphen {
    padding-top: 5px;
    font-size: 12px;
    font-weight: 450;
    color: ${(props) => (props.value ? 'green' : 'red')};
  }
`;
