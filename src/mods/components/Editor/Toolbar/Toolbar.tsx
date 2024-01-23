import React, { MouseEvent } from 'react';
import { Element as SlateElement } from 'slate';
import { useSlate } from 'slate-react';
import {
  IconBold, IconCode, IconItalic, IconList, IconListNumbers, IconUnderline,
} from '@tabler/icons-react';
import { Button } from '@mantine/core';
import {
  isMark, isMarkActive, isBlockActive, toggleBlock, toggleMark,
} from '../_utils';
import classes from './Toolbar.module.css';

// See https://stackoverflow.com/questions/47573087/typescript-check-if-value-is-contained-in-type
function isSlateElementType(format: string): format is SlateElement['type'] {
  return ['paragraph', 'list-item', 'bulleted-list', 'numbered-list'].includes(format);
}

function Toolbar() {
  const editor = useSlate();

  const handleClickToolbarBtn = (ev: MouseEvent<HTMLButtonElement>, format: string) => {
    ev.preventDefault();
    if (isMark(format)) {
      toggleMark(editor, format);
    } else if (isSlateElementType(format)) {
      toggleBlock(editor, format);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes['toolbar-group']}>
        <Button
          variant={isMarkActive(editor, 'bold') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'bold')}
        >
          <IconBold size={16} />
        </Button>
        <Button
          variant={isMarkActive(editor, 'italic') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'italic')}
        >
          <IconItalic size={16} />
        </Button>
        <Button
          variant={isMarkActive(editor, 'underline') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'underline')}
        >
          <IconUnderline size={16} />
        </Button>
        <Button
          variant={isMarkActive(editor, 'code') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'code')}
        >
          <IconCode size={16} />
        </Button>
      </div>
      <div className={classes['toolbar-group']}>
        <Button
          variant={isBlockActive(editor, 'numbered-list') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'numbered-list')}
        >
          <IconListNumbers size={16} />
        </Button>
        <Button
          variant={isBlockActive(editor, 'bulleted-list') ? 'filled' : 'subtle'}
          className={classes['toolbar-button']}
          size="xs"
          color="blue"
          onClick={(ev) => handleClickToolbarBtn(ev, 'bulleted-list')}
        >
          <IconList size={16} />
        </Button>
      </div>
    </div>
  );
}

export default Toolbar;
