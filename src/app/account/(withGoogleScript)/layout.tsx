import React, { ReactNode } from 'react';
import Script from 'next/script';

type WithGoogleSciptLayoutProps = {
  children: ReactNode;
};

function WithGoogleSciptLayout({ children }: WithGoogleSciptLayoutProps) {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" />
      {children}
    </>

  );
}

export default WithGoogleSciptLayout;
