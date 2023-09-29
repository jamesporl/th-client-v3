'use client';

import React from 'react';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import MyProfileQry from '../gql/MyProfileQry';

function MyProfile() {
  const { data } = useSuspenseQuery(MyProfileQry);

  console.log(data);

  return <div />;
}

export default MyProfile;
