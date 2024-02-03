import escapeHtml from 'escape-html';
import { CtfRichTextContent } from './_types';

function serializeCtfNodeToHtml(node: CtfRichTextContent) {
  if (node.nodeType === 'text') {
    let string = escapeHtml(node.value);
    const classNames = [];
    node.marks.forEach((m) => {
      if (m.type === 'bold') {
        classNames.push('ctf-text-bold');
      } else if (m.type === 'italic') {
        classNames.push('ctf-text-italic');
      } else if (m.type === 'underline') {
        classNames.push('ctf-text-underline');
      } else if (m.type === 'code') {
        classNames.push('ctf-text-code');
      }
    });
    if (classNames.length) {
      string = `<span class="${classNames.join(' ')}">${string}</span>`;
    }
    return string;
  }

  const children = (node.content || []).map((n) => serializeCtfNodeToHtml(n)).join('');

  if (node.nodeType === 'heading-1') {
    return `<h1>${children}</h1>`;
  }
  if (node.nodeType === 'heading-2') {
    return `<h2>${children}</h2>`;
  }
  if (node.nodeType === 'heading-3') {
    return `<h3>${children}</h3>`;
  }
  if (node.nodeType === 'heading-4') {
    return `<h4>${children}</h4>`;
  }
  if (node.nodeType === 'heading-5') {
    return `<h5>${children}</h5>`;
  }
  if (node.nodeType === 'heading-6') {
    return `<h6>${children}</h6>`;
  }
  if (node.nodeType === 'unordered-list') {
    return `<ul>${children}</ul>`;
  }
  if (node.nodeType === 'ordered-list') {
    return `<ol>${children}</ol>`;
  }
  if (node.nodeType === 'list-item') {
    return `<li>${children}</li>`;
  }
  return `<p>${children}</p>`;
}

export default function serializeCtfContentToHtml(content: CtfRichTextContent) {
  return content.content.map((node) => serializeCtfNodeToHtml(node)).join('');
}
