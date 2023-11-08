'use client';

import React from 'react';
import { AppsByMonth } from '../../_types';
import Month from './Month';

type ClientAppsByMonthProps = {
  appsByMonth: AppsByMonth;
};

function ClientAppsByMonth({ appsByMonth }: ClientAppsByMonthProps) {
  if (appsByMonth.length) {
    return appsByMonth.map((m) => {
      if (m.apps.length) {
        return (<Month key={m.month.toISOString()} month={m} />);
      }
      return null;
    });
  }

  return null;
}

export default ClientAppsByMonth;
