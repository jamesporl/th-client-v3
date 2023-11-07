import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export type FormattedText = {
  text: string;
  bold?: true;
  italic?: true;
  underline?: true;
  code?: true;
};

export type CustomText = FormattedText;

export type ParagraphElement = {
  type: 'paragraph'
  children: CustomText[];
};

export type ListElement = {
  type: 'list-item';
  children: CustomText[];
};

export type BulletedListElement = {
  type: 'bulleted-list';
  children: ListElement[];
};

export type NumberedListElement = {
  type: 'numbered-list';
  children: ListElement[];
};

export type CustomElement = ParagraphElement | ListElement | BulletedListElement
| NumberedListElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
