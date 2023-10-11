import React from 'react';
import { Loader } from '@mantine/core';
import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={classes.container}>
      <Loader />
    </div>
  );
}

export default Spinner;
