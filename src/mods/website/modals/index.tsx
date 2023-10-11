'use-client';

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import dynamic from 'next/dynamic';
import { ContextModalProps } from '@mantine/modals';
import Spinner from '../../components/Spinner/Spinner';

const NewAppFormComponent = dynamic(
  () => import('./NewAppForm'),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

const websiteModals = {
  newAppForm: (props: ContextModalProps) => <NewAppFormComponent {...props} />,
};

export default websiteModals;
