import React from 'react';
import ReactMarkdown from 'react-markdown'; 

function MarkdownEditor({ markdown, setMarkDown,loading,setLoading}) {
  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => {
            setMarkDown(e.target.value)
            setLoading(true)
        }}
      />
      <div className="preview">
        {loading?<div className='loading'>loading...</div>:<ReactMarkdown>{markdown}</ReactMarkdown>}
      </div>
    </>
  );
}

export default MarkdownEditor;
