import React from 'react';

export default function renderLeaf({ attributes, children, leaf }) {
  const style: { [key: string]: string } = {};

  let output = children;

  if (leaf.bold) {
    style.fontWeight = 'bold';
  }

  if (leaf.italic) {
    style.fontStyle = 'italic';
  }

  if (leaf.underline) {
    style.textDecoration = 'underline';
  }

  if (leaf.code) {
    style.fontFamily = '"Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas", "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace';
    style.fontSize = '0.9rem';
    style.color = '#2d3748';
    style.backgroundColor = '#edf2f7';
    style.padding = '0.25rem 0.125rem';
    style.borderRadius = '0.125rem';
    output = <code style={style}>{children}</code>;
  }

  return (
    <span style={style} {...attributes}>
      {output}
    </span>
  );
}
