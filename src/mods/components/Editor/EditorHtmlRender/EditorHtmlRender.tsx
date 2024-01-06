/* eslint-disable react/no-danger */
import React from 'react';
import './editor-html-render.css';

// Note: Use global styles here. CSS modules do not work

type EditorHtmlRenderProps = {
  htmlDesc: string;
};

function EditorHtmlRender({ htmlDesc }: EditorHtmlRenderProps) {
  return (
    <div
      className="html-container"
      dangerouslySetInnerHTML={{
        __html: htmlDesc,
      }}
    />

  );
}

export default EditorHtmlRender;
