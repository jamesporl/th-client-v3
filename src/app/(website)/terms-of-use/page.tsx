import React from 'react';
import type { Metadata } from 'next';
import TermsOfUse from '../../../mods/website/containers/TermsOfUse/TermsOfUse';
import sendCtfRequest from '../../../lib/utils/ctf/sendCtfRequest';
import { CtfTermsOfUseResp } from '../../../lib/utils/ctf/_types';

export const metadata: Metadata = {
  title: 'Terms of Use',
};

export default async function TermsOfUsePage() {
  const resp = await sendCtfRequest<CtfTermsOfUseResp>(
    '/entries',
    0,
    { content_type: 'thTermsOfUse', limit: '1', order: '-fields.effectiveDate' },
  );
  return <TermsOfUse content={resp.items[0]} />;
}
