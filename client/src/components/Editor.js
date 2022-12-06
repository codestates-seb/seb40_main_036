import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

// eslint-disable-next-line react/display-name
const Editor = ({ onChange, value }) => {
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

  return (
    <EditorStyle>
      <ReactQuill
        className="editor"
        modules={modules}
        formats={formats}
        onChange={onChange}
        value={value}
      />
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
