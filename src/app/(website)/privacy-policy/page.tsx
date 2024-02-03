import React from 'react';
import type { Metadata } from 'next';
import PrivacyPolicy from '../../../mods/website/containers/PrivacyPolicy/PrivacyPolicy';
import sendCtfRequest from '../../../lib/utils/ctf/sendCtfRequest';
import { CtfPrivacyPolicyResp } from '../../../lib/utils/ctf/_types';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default async function PrivacyPolicyPage() {
  const resp = await sendCtfRequest<CtfPrivacyPolicyResp>(
    '/entries',
    0,
    { content_type: 'thPrivacyPolicy', limit: '1', order: '-fields.effectiveDate' },
  );
  console.log(JSON.stringify(resp, null, 2));
  return <PrivacyPolicy content={resp.items[0]} />;
}
