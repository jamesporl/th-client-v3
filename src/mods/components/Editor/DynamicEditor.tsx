import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from './_types';

const Editor = dynamic(() => import('./Editor/Editor'), { ssr: false });

const EditorWithForwardeddRef = forwardRef(({ initialValue, ...props }: EditorProps, ref) => (
  <Editor {...props} initialValue={initialValue} editorRef={ref} />
));

EditorWithForwardeddRef.displayName = 'EditorWithForwardeddRef';

export default EditorWithForwardeddRef;
