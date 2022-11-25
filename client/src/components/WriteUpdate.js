import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WriteUpdate = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const { questionId } = useParams();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (el) => {
    setContents(el);
  };

  useEffect(() => {
    const getBoard = async () => {
      const { data } = await axios.get(`/question/${questionId}`);
      return data;
    };
    getBoard().then((result) => {
      setTitle(result.questionTitle);
      setContents(result.questionContent);
    });
  }, []);

  // const canSubmit = useCallback(() => {
  //   return contents !== '' && title !== '';
  // }, [title, contents]);

  return (
    <WriteUpdateStyle>
      <form>
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
          <Editor onchange={onChangeContents} value={contents} />
        </div>
      </form>
      <div className="reCancelBox">
        <button className="registBox">
          <div className="registInput">수정</div>
        </button>
        <button className="cancelBox">
          <div className="cancelInput">취소</div>
        </button>
      </div>
    </WriteUpdateStyle>
  );
};

export default WriteUpdate;

const WriteUpdateStyle = styled.div`
  width: 1180px;
  height: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.25);
  margin: 50px auto;

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
