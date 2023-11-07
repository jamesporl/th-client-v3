import { Range } from 'slate';
import { LIST_TYPES, toggleBlock } from './_utils';

export default function withCustomPlugins(editor) {
  const { deleteBackward, insertBreak } = editor;

  // eslint-disable-next-line no-param-reassign
  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (
      selection
      && selection.focus.offset === 0
      && selection.anchor.offset === 0
      && Range.isCollapsed(selection)
    ) {
      const node = editor.children[selection.anchor.path[0]];
      if (node && node.children?.length === 1 && LIST_TYPES.includes(node.type)) {
        toggleBlock(editor, node.type);
      }
      deleteBackward(unit);
    } else {
      deleteBackward(unit);
    }
  };

  // eslint-disable-next-line no-param-reassign
  editor.insertBreak = () => {
    const { selection } = editor;
    if (
      selection
      && selection.focus.offset === 0
      && selection.anchor.offset === 0
      && Range.isCollapsed(selection)
    ) {
      const node = editor.children[selection.anchor.path[0]];
      if (node && LIST_TYPES.includes(node.type)) {
        toggleBlock(editor, node.type);
        return;
      }
    }
    insertBreak();
  };

  return editor;
}
