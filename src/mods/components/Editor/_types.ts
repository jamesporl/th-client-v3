import { ForwardedRef, MutableRefObject } from 'react';
import { Descendant } from 'slate';

export type EditorProps = {
  initialValue: Descendant[],
  placeholder?: string;
  minHeight?: number;
  onChange: (value: Descendant[]) => void,
  ref: MutableRefObject<any>
};

export type EditorWithRefProps = EditorProps & {
  editorRef: ForwardedRef<unknown>,
};
