import axios from 'axios';
import { useState, useMemo } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
const ShelterWriteForm = () => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          [{ color: [] }, { background: [] }],
        ],
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
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

    const headers = {
      'Content-Type': 'application/json',
      token: `${localStorage.getItem('token')}`,
    };
    axios
      .post(
        `/api/shelterQuestion`,
        {
          memberId: localStorage.getItem('memberId'),
          shelterQuestionTitle: title,
          shelterQuestionContent: contents,
          locationTag: drop,
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        navigate(`/review/${response.data.shelterQuestionId}`);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  };
  return (
    <Container>
      <WriteFormStyle>
        <form className="input">
          <div className="regionBox">
            <div className="region">지역선택</div>
            <DropDown onChange={handleDrop} value={drop} />
          </div>
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
                theme="snow"
                onChange={onChangeContents}
              />
            </EditorStyle>
          </div>
        </form>
        <div className="reCancelBox">
          <button onClick={submit} className="registBox">
            <div className="registInput">등록</div>
          </button>
          <Link to="/review" style={{ textDecoration: 'none' }}>
            <button className="cancelBox">
              <div className="cancelInput">취소</div>
            </button>
          </Link>
        </div>
      </WriteFormStyle>
    </Container>
  );
};

export default ShelterWriteForm;

const Container = styled.div`
  margin: 80px auto;
  padding: 20px 80px;
  max-width: 1180px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
  ${tablet} {
    padding: 20px 40px;
  }
  ${mobile} {
    padding: 20px 15px;
  }
`;
const WriteFormStyle = styled.div`
  .region {
    padding: 10px 0;
    padding-top: 60px;
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 24px;
    ${tablet} {
      font-size: 20px;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      height: 2.1rem;
    }
  }

  .titleText {
    padding: 10px 0;
    position: relative;
    font-weight: 400;
    font-size: 24px;
    ${tablet} {
      font-size: 20px;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      height: 2.1rem;
    }
  }

  .titleInputDiv {
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleInput {
    width: 100%;
    height: 46px;
    background: #ffffff;
    border: 1px solid #d2d2d2;
    font-size: 20px;
    ${tablet} {
      font-size: 18px;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      height: 2.1rem;
    }
  }
  .content {
    padding: 10px 0;
    padding-bottom: 12px;
    font-weight: 400;
    font-size: 24px;
    ${tablet} {
      font-size: 20px;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      height: 2.1rem;
    }
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
    border: none;
    cursor: pointer;
    :hover {
      background-color: #005603;
    }
    ${tablet} {
      font-size: 20px;
      width: 130px;
      height: 40px;
    }
    ${mobile} {
      font-size: 16px;
      width: 120px;
      height: 30px;
    }
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
    border: #919eab;
    cursor: pointer;
    :hover {
      background-color: #d2d2d2;
    }
    ${tablet} {
      font-size: 20px;
      width: 130px;
      height: 40px;
    }
    ${mobile} {
      font-size: 16px;
      width: 120px;
      height: 30px;
    }
  }
  .cancelInput {
    font-weight: 600;
    font-size: 20px;
  }
`;

const EditorStyle = styled.div`
  height: 300px;

  .editor {
    text-align: center;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    ${tablet} {
      height: 230px;
    }
    ${mobile} {
      height: 180px;
    }
  }
  .ql-container {
    font-size: 1rem;
  }
  .ql-size-small {
    font-size: 0.76rem;
  }
  .ql-size-large {
    font-size: 1.5rem;
  }
  .ql-size-huge {
    font-size: 2rem;
  }
`;
