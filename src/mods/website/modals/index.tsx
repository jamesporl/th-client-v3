'use-client';

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

const ImageCropperComponent = dynamic(
  () => import('./ImageCropper'),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

const NavbarSearchResultsComponent = dynamic(
  () => import('./NavbarSearchResults/NavbarSearchResults'),
  {
    ssr: false,
    loading: () => <Spinner />,
  },
);

const websiteModals = {
  newAppForm: (props: ContextModalProps) => <NewAppFormComponent {...props} />,
  imageCropper: (props: ContextModalProps) => <ImageCropperComponent {...props} />,
  navbarSearchResults: (props: ContextModalProps) => <NavbarSearchResultsComponent {...props} />,
};

export default websiteModals;
