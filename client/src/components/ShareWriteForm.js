import axios from 'axios';
import { useState, useMemo } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars

const ShareWriteForm = () => {
  function imageUrlHandler() {
    const range = this.quill.getSelection();
    const url = prompt('이미지 주소를 넣어주세요');

    if (url) {
      // 커서위치에 imageUrl 삽입
      this.quill.insertEmbed(range.index, 'image', url);
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          [{ color: [] }, { background: [] }],
        ],
        handlers: {
          link: imageUrlHandler,
        },
      },
    }),
    []
  );

  // const modules = useMemo(
  //   () => ({
  //     toolbar: [
  //       ['bold', 'italic', 'underline'],
  //       [{ list: 'ordered' }, { list: 'bullet' }],
  //       [{ size: ['small', false, 'large', 'huge'] }],
  //       ['link', 'image'],
  //       [{ color: [] }, { background: [] }],
  //     ],
  //   }),
  //   []
  // );

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
    console.log(el);
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
      return Swal.fire({
        title: '지역을 선택하세요',
        confirmButtonColor: '#008505',
      });
    } else if (title === '') {
      return Swal.fire({
        title: '제목을 입력하세요',
        confirmButtonColor: '#008505',
      });
    } else if (contents === '' || contents === '<p><br></p>') {
      return Swal.fire({
        title: '내용을 입력하세요',
        confirmButtonColor: '#008505',
      });
    }
    axios
      .post(`/question/`, {
        memberId: localStorage.getItem('memberId'),
        questionTitle: title,
        questionContent: contents,
        locationTag: drop,
      })
      .then((response) => {
        console.log(response);
        navigate('/share');
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
        <DropDownStyle>
          <DropDown className="dropStyle" onChange={handleDrop} value={drop} />
        </DropDownStyle>
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
        <Link to="/share" style={{ textDecoration: 'none' }}>
          <button className="cancelBox">
            <div className="cancelInput">취소</div>
          </button>
        </Link>
      </div>
    </WriteFormStyle>
  );
};

export default ShareWriteForm;

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

const DropDownStyle = styled.div`
  .dropStyle {
    width: 42px;
    height: 4px;
  }
`;
