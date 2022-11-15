import styled from 'styled-components';
import DropDown from './Dropdown';

const WriteForm = () => {
  return (
    <WriteFormStyle>
      <form className="input">
        <div className="region">지역선택</div>
        <DropDown />
        <div className="title">
          <label className="titleText" htmlFor="titleWrite">
            제목
          </label>
          <div className="titleInputDiv">
            <input className="titleInput" type="text" id="titleWrite" />
          </div>
        </div>
        <div className="content">내용</div>
      </form>
      <div className="reCancelBox">
        <button className="registBox">
          <div className="registInput">등록</div>
        </button>
        <button className="cancelBox">
          <div className="cancelInput">취소</div>
        </button>
      </div>
    </WriteFormStyle>
  );
};

export default WriteForm;

const WriteFormStyle = styled.div`
  width: 1180px;
  height: 650px;
  background: #ffffff;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 60px auto;

  .region {
    padding-left: 100px;
    padding-top: 60px;
    font-weight: 400;
    font-size: 24px;
  }
  .title {
    padding: 50px;
  }

  .titleText {
    position: relative;
    top: 50%;
    left: 4.8%;
    font-weight: 400;
    font-size: 24px;
  }

  .titleInputDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin: 10px;
  }

  .titleInput {
    width: 983px;
    height: 46px;
    left: 228px;
    top: 225px;
    background: #ffffff;
    border: 1px solid #d2d2d2;
  }
  .content {
    padding-left: 100px;
    font-weight: 400;
    font-size: 24px;
  }
  .reCancelBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .registBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 167px;
    height: 50px;
    background: #008505;
    border-radius: 10px;
    margin-right: 26px;
  }
  .registInput {
    font-weight: 600;
    font-size: 20px;
    color: white;
  }
  .cancelBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 167px;
    height: 50px;
    background: #eaeaea;
    border-radius: 10px;
  }
  .cancelInput {
    font-weight: 600;
    font-size: 20px;
  }
`;
