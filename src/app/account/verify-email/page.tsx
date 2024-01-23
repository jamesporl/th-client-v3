import React from 'react';
import VerifyEmail from '../../../mods/auth/containers/VerifyEmail/VerifyEmail';

export const metadata = {
  title: 'Verify Email',
};

function VerifyEmailPage({ searchParams }: { searchParams: { email: string } }) {
  return (
    <VerifyEmail email={searchParams.email} />
  );
}

export default VerifyEmailPage;
