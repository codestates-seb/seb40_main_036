import styled from "styled-components";

const SignUP = () => {
  return (
    <SignUpForm>
      <div className="signUpForm">
        <form className="loginInput">
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
          <button>로그인</button>
          <div className="accountExistence">
            이미 계정이 있으신가요? <a href="#">로그인</a>
          </div>
        </form>
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
    height: 458px;
    left: 546px;
    top: 290px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
