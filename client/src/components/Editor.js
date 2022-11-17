import { useQuill } from 'react-quilljs';
import { useEffect, useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Editor = () => {
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['link', 'image', 'video'],
        [{ color: [] }, { background: [] }],
      ],
    }),
    []
  );

  const { quill, quillRef } = useQuill({ modules });
  const [value, setValue] = useState();
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  console.log(value, 'this is quill');
  return (
    <EditorStyle>
      <div className="editor">
        <div ref={quillRef} />
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