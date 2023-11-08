'use client';

import React, { useMemo } from 'react';
import { Box, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { AppsByMonth } from '../../_types';
import App from '../App/App';
import DEFAULT_TZ from '../../../../../../lib/utils/constants/DEFAULT_TZ';

type MonthProps = {
  month: AppsByMonth[0],
};

function Month({ month }: MonthProps) {
  const formattedMonth = useMemo(() => {
    const monthTz = dayjs(month.month).tz(DEFAULT_TZ);
    let fMonth = monthTz.format('MMMM YYYY');
    const mStart = dayjs().tz(DEFAULT_TZ).startOf('M');
    const lastMonth = mStart.subtract(1, 'day').startOf('M');
    if (lastMonth.isSame(dayjs(month.month))) {
      fMonth = 'Last Month';
    } else if (mStart.get('year') === dayjs(month.month).get('year')) {
      fMonth = monthTz.format('MMMM');
      if (mStart.get('month') === monthTz.get('month')) {
        fMonth = 'This Month';
      }
    }
    return fMonth;
  }, [month.month]);

  return (
    <Box mt={32}>
      <Text fz={20} fw={500}>
        {formattedMonth}
      </Text>
      {month.apps.map((app) => (
        <Box mt={16} key={`${month}-${app._id}`}>
          <App app={app} />
        </Box>
      ))}
    </Box>
  );
}

export default Month;
