/* eslint-disable react/no-danger */
import React from 'react';

type EditorHtmlRenderProps = {
  htmlDesc: string;
};

function EditorHtmlRender({ htmlDesc }: EditorHtmlRenderProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlDesc,
      }}
    />
  );
}

export default EditorHtmlRender;
