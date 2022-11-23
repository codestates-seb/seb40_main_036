import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import Editor from './Editor';

const WriteForm = () => {
  // 초기값 - 제목, 내용
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState(''); // eslint-disable-line no-unused-vars

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  // const onChangeContents = () => {
  //   testRef.current.handleBody();
  // };

  const submit = () => {
    if (title === '') {
      return alert('제목을 입력하세요');
    } else if (contents === '') {
      return alert('내용을 입력하세요');
    }
    axios
      .post('/stuffQuestion', {
        memberId: sessionStorage.getItem('memberId'),
        name: sessionStorage.getItem('name'),
        stuffQuestionTitle: title,
        stuffQuestionContent: contents,
        locationTag: '중구',
      })
      .then((respone) => console.log(respone.data))
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  };
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
            <input
              className="titleInput"
              type="text"
              id="titleWrite"
              value={title || ''}
              onChange={onChangeTitle}
            />
          </div>
        </div>
        <div>
          <div className="content">내용</div>
          {/* <input
            className="titleInput"
            type="text"
            id="titleWrite"
            value={contents || ''}
            onChange={onChangeContents}
          /> */}
          <Editor onChange={onChangeContents} contents={contents} />
        </div>
      </form>
      <div className="reCancelBox">
        <button onClick={submit} className="registBox">
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
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 50px auto;

  .region {
    padding-left: 100px;
    padding-top: 60px;
    padding-bottom: 12px;
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
    font-size: 20px;
  }
  .content {
    padding-left: 100px;
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 24px;
  }
  .reCancelBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6%;
    padding-bottom: 4%;
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
