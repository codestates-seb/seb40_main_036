import { useState } from 'react';
import ReactQuill from 'react-quill';
import '../node_modules/react-quill/dist/quill.snow.css';

const TestEditor = () => {
  const [body, setBody] = useState('');

  const handleBody = (e) => {
    console.log(e);
    setBody(e);
  };

  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  return (
    <div>
      <h2>text editor</h2>
      <ReactQuill
        placeholder="write"
        modules={modules}
        formats={formats}
        onChange={handleBody}
        value={body}
      />
    </div>
  );
};

export default TestEditor;
