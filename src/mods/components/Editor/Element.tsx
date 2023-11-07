'use client';

import React from 'react';
import { RenderElementProps } from 'slate-react';

function Element({ attributes, children, element }: RenderElementProps) {
  switch (element.type) {
    case 'bulleted-list':
      return (
        <ul {...attributes}>
          {children}
        </ul>
      );
    case 'list-item':
      return (
        <li {...attributes}>
          {children}
        </li>
      );
    case 'numbered-list':
      return (
        <ol {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p {...attributes}>
          {children}
        </p>
      );
  }
}

export default Element;
