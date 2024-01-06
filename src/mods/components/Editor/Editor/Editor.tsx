import React, {
  KeyboardEvent, useCallback, useImperativeHandle, useMemo,
} from 'react';
import { createEditor, Transforms, Editor as SlateEditor } from 'slate';
import {
  Slate, Editable, withReact, RenderLeafProps, RenderElementProps,
} from 'slate-react';
import { withHistory } from 'slate-history';
import isHotkey from 'is-hotkey';
import Toolbar from '../Toolbar/Toolbar';
import {
  DEFAULT_EDITOR_VALUE, HOTKEYS_MAP, HOTKEYS_MAP_KEYS, toggleMark,
} from '../_utils';
import withCustomPlugins from '../withCustomPlugins';
import { EditorWithRefProps } from '../_types';
import classes from './Editor.module.css';
import Element from '../Element';
import Leaf from '../Leaf';

// See https://github.com/ianstormtaylor/slate/blob/main/site/examples/richtext.tsx
function Editor(props: EditorWithRefProps) {
  const {
    initialValue = DEFAULT_EDITOR_VALUE,
    onChange,
    minHeight = 250,
    placeholder = 'Type something',
    editorRef,
  } = props;

  const renderElement = useCallback(
    (eltProps: RenderElementProps) => <Element {...eltProps} />,
    [],
  );

  const renderLeaf = useCallback(
    (leafProps: RenderLeafProps) => <Leaf {...leafProps} />,
    [],
  );

  const editor = useMemo(() => withCustomPlugins(withHistory(withReact(createEditor()))), []);

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    /* eslint-disable-next-line no-restricted-syntax */
    for (const hotkey of HOTKEYS_MAP_KEYS) {
      if (isHotkey(hotkey, event)) {
        event.preventDefault();
        const format = HOTKEYS_MAP.get(hotkey);
        toggleMark(editor, format);
        break;
      }
    }
  };

  useImperativeHandle(
    editorRef,
    () => ({
      resetEditor: () => {
        Transforms.delete(editor, {
          at: {
            anchor: SlateEditor.start(editor, []),
            focus: SlateEditor.end(editor, []),
          },
        });
      },
    }),
    [editor],
  );

  let fInitialValue = DEFAULT_EDITOR_VALUE;
  if (Array.isArray(initialValue)) {
    fInitialValue = initialValue;
  }

  return (
    <div className={classes.container}>
      <Slate editor={editor} initialValue={fInitialValue} onChange={onChange}>
        <Toolbar />
        <div className={classes.editor} style={{ minHeight }}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            spellCheck
            onKeyDown={handleKeyPress}
          />
        </div>
      </Slate>
    </div>
  );
}

export default Editor;
