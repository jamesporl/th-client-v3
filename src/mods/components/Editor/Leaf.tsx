'use client';

import React from 'react';
import { RenderLeafProps } from 'slate-react';

function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  let newChildren = children;
  if (leaf.bold) {
    newChildren = <strong>{children}</strong>;
  }

  if (leaf.code) {
    newChildren = <code>{children}</code>;
  }

  if (leaf.italic) {
    newChildren = <em>{children}</em>;
  }

  if (leaf.underline) {
    newChildren = <u>{children}</u>;
  }

  return <span {...attributes}>{newChildren}</span>;
}

export default Leaf;
