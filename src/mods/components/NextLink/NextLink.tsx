import React, { forwardRef } from 'react';
import Link from 'next/link';

const NextLink = forwardRef(
  (
    { href, ...others }: React.ComponentPropsWithoutRef<typeof Link>,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => (
    <Link href={href} legacyBehavior>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, react/jsx-props-no-spreading */}
      <a {...others} ref={ref} />
    </Link>
  ),
);

NextLink.displayName = 'NextLink';

export default NextLink;
