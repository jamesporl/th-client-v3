/* eslint-disable react/no-danger */
import React from 'react';
import './editor-html-render.css';

// Note: Use global styles here. CSS modules do not work

type CtfEditorHtmlRenderProps = {
  htmlDesc: string;
};

function CtfHtmlRender({ htmlDesc }: CtfEditorHtmlRenderProps) {
  return (
    <div
      className="ctf-html-container"
      dangerouslySetInnerHTML={{
        __html: htmlDesc,
      }}
    />

  );
}

export default CtfHtmlRender;
