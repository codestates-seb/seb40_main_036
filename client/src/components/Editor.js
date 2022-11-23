import { useEffect, useMemo, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

// eslint-disable-next-line react/display-name
const Editor = ({ onChange, contents }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ align: [] }],
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
    'align',
    'list',
    'size',
    'link',
    'image',
    'video',
    'color',
    'background',
  ];

  // eslint-disable-next-line no-unused-vars
  const [body, setBody] = useState('');
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const { quill, quillRef } = useQuill({ modules, formats, onChangeBody });

  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // const text = quill.getText();
        // console.log(text);
        console.log(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <EditorStyle>
      <div className="editor">
        <input ref={quillRef} onChange={onChange} />
        <div>{contents}</div>
      </div>
    </EditorStyle>
  );
};

export default Editor;

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
