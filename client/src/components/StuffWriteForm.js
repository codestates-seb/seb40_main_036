import axios from 'axios';
import { useState, useMemo } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';

const StuffWriteForm = () => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['link', 'video'],
        [{ color: [] }, { background: [] }],
      ],
    }),
    []
  );

  const formats = [
    'bold',
    'italic',
    'underline',
    'list',
    'size',
    'link',
    'image',
    'video',
    'color',
    'background',
  ];

  // 초기값 - 제목, 내용
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState(''); // eslint-disable-line no-unused-vars

  // 지역 선택 드롭다운
  const [drop, setDrop] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const onChangeContents = (el) => {
    setContents(el);
  };

  // const extractTextPattern = /(<([^>]+)>)/gi;
  // let a = contents.replace(extractTextPattern, '');
  // console.log(a);

  // 지역 구 받아오는 값
  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

  const navigate = useNavigate();

  const submit = () => {
    if (drop === '') {
      return alert('지역을 선택하세요');
    } else if (title === '') {
      return alert('제목을 입력하세요');
    } else if (contents === '') {
      return alert('내용을 입력하세요');
    }
    axios
      .post(`/stuffQuestion`, {
        memberId: sessionStorage.getItem('memberId'),
        name: sessionStorage.getItem('name'),
        stuffQuestionTitle: title,
        stuffQuestionContent: contents,
        locationTag: drop,
      })
      .then((response) => {
        console.log(response);
        navigate('/stuffList');
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  };
  return (
    <WriteFormStyle>
      <form className="input">
        <div className="region">지역선택</div>
        <DropDown onChange={handleDrop} value={drop} />
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
          <EditorStyle>
            <ReactQuill
              className="editor"
              modules={modules}
              formats={formats}
              value={contents}
              onChange={onChangeContents}
            />
          </EditorStyle>
        </div>
      </form>
      <div className="reCancelBox">
        <button onClick={submit} className="registBox">
          <div className="registInput">등록</div>
        </button>
        <Link to="/stuffList" style={{ textDecoration: 'none' }}>
          <button className="cancelBox">
            <div className="cancelInput">취소</div>
          </button>
        </Link>
      </div>
    </WriteFormStyle>
  );
};

export default StuffWriteForm;

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

const EditorStyle = styled.div`
  .editor {
    text-align: center;
    width: 983px;
    height: 250px;
    top: 495px;
    margin-left: auto;
    margin-right: auto;
  }
`;
