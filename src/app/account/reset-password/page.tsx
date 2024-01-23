import React from 'react';
import ResetPassword from '../../../mods/auth/containers/ResetPassword/ResetPassword';

export const metadata = {
  title: 'Reset Password',
};

function ResetPasswordPage({ searchParams }: { searchParams: { email: string, token: string } }) {
  return <ResetPassword email={searchParams.email} token={searchParams.token} />;
}

export default ResetPasswordPage;
