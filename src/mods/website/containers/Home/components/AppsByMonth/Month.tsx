'use client';

import React, { useMemo } from 'react';
import { Box, Button, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { AppsByMonth } from '../../_types';
import App from '../App/App';
import DEFAULT_TZ from '../../../../../../lib/utils/constants/DEFAULT_TZ';

type MonthProps = {
  month: AppsByMonth[0];
  onLoadMore: () => void;
  isLoading: boolean;
};

function Month({ month, onLoadMore, isLoading }: MonthProps) {
  const formattedMonth = useMemo(() => {
    const monthTz = dayjs(month.month).tz(DEFAULT_TZ);
    let fMonth = monthTz.format('MMMM YYYY');
    const mStart = dayjs().tz(DEFAULT_TZ).startOf('M');
    const lastMonth = mStart.subtract(1, 'D').startOf('M');
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

  let seeMoreBtn = null;
  if (month.apps.length < month.totalCount) {
    seeMoreBtn = (
      <Button
        size="sm"
        fullWidth
        onClick={onLoadMore}
        mt={16}
        variant="light"
        loading={isLoading}
      >
        See More Apps...
      </Button>
    );
  }

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
      {seeMoreBtn}
    </Box>
  );
}

export default Month;
