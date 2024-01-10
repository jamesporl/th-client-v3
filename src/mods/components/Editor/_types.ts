import { ForwardedRef, MutableRefObject } from 'react';
import { Descendant } from 'slate';

export type EditorProps = {
  initialValue: Descendant[],
  placeholder?: string;
  minHeight?: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: Descendant[]) => void,
  ref: MutableRefObject<any>
};

export type EditorWithRefProps = EditorProps & {
  editorRef: ForwardedRef<unknown>,
};
