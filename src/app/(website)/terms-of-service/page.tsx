import React from 'react';
import type { Metadata } from 'next';
import sendCtfRequest from '../../../lib/utils/ctf/sendCtfRequest';
import { CtfTermsOfServiceResp } from '../../../lib/utils/ctf/_types';
import TermsOfService from '../../../mods/website/containers/TermsOfService/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default async function TermsOfServicePage() {
  const resp = await sendCtfRequest<CtfTermsOfServiceResp>(
    '/entries',
    0,
    { content_type: 'thTermsOfService', limit: '1', order: '-fields.effectiveDate' },
  );
  return <TermsOfService content={resp.items[0]} />;
}
