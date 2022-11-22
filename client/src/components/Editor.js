import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

// eslint-disable-next-line react/display-name
const Editor = forwardRef((onChange, ref) => {
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

  // const { quill, quillRef } = useQuill({ modules, formats });
  // eslint-disable-next-line no-unused-vars
  const [body, setBody] = useState('');
  // const handleBody = (value) => {
  //   console.log(value);
  //   setBody(value);
  // };
  const handleBody = (e) => {
    setBody(e);
  };
  useImperativeHandle(ref, () => ({
    handleBody,
  }));

  // useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', () => {
  //       setValue(quillRef.current.firstChild.innerHTML);
  //     });
  //   }
  //   console.log(value, 'this is quill');
  // }, [quill]);

  return (
    <EditorStyle>
      {/* <div className="editor">
        <div ref={quillRef} />
      </div> */}
      <ReactQuill
        className="editor"
        modules={modules}
        formats={formats}
        onChange={onChange}
        ref={ref}
      />
    </EditorStyle>
  );
});

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
