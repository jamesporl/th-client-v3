'use client';

import React from 'react';
import { Box, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import WebsiteMaxWidthWrapper from '../../components/WebsiteMaxWidthWrapper/WebsiteMaxWidthWrapper';
import { CtfPrivacyPolicyItem } from '../../../../lib/utils/ctf/_types';
import serializeCtfContentToHtml from '../../../../lib/utils/ctf/searializeCtfContentToHtml';
import CtfHtmlRender from '../../../components/CtfHtmlRender/CtfHtmlRender';

type PrivacyPolicyProps = {
  content: CtfPrivacyPolicyItem;
};

function PrivacyPolicy({ content }: PrivacyPolicyProps) {
  const effectiveDate = dayjs(content.fields.effectiveDate).format('MMM D, YYYY');

  const ctfHtml = serializeCtfContentToHtml(content.fields.content);

  return (
    <WebsiteMaxWidthWrapper>
      <Title order={1}>Privacy Policy</Title>
      <Text fw="bold" mt={32} fs="italic">
        {`Updated as of ${effectiveDate}`}
      </Text>
      <Box mt={32}>
        <CtfHtmlRender htmlDesc={ctfHtml} />
      </Box>
    </WebsiteMaxWidthWrapper>
  );
}

export default PrivacyPolicy;
