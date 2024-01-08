'use client';

import React, { ReactNode, useContext } from 'react';
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  Menu,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import '@mantine/spotlight/styles.css';
import {
  IconApps, IconLogout, IconSearch, IconUser,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { observer } from 'mobx-react';
import { modals } from '@mantine/modals';
import classes from './WebsiteNavbar.module.css';
import AuthContext from '../../../../lib/mobx/Auth';
import NextLink from '../../../components/NextLink/NextLink';
import useClickSubmitAnApp from '../../hooks/useClickSubmitAnApp';

type WebsiteNavbarProps = {
  children: ReactNode;
};

const menus = [
  {
    label: 'Categories',
    href: '/categories',
    key: 'categories',
  },
  {
    label: 'About Us',
    href: '/about-us',
    key: 'about-us',
  },
];

function WebsiteNavbar({ children }: WebsiteNavbarProps) {
  const [opened, { toggle: toggleBurger }] = useDisclosure(false);

  const authCtx = useContext(AuthContext);

  const handleClickSubmitAnApp = useClickSubmitAnApp();

  const handleClickLogout = () => {
    authCtx.logout();
    window.location.href = '/';
  };

  const handleFocusSearch = () => {
    modals.openContextModal({
      modal: 'navbarSearchResults',
      padding: 0,
      withCloseButton: false,
      returnFocus: false,
      size: 'md',
      innerProps: {},
    });
  };

  const submitAppDesktopBtn = (
    <Button color="blue" size="sm" onClick={handleClickSubmitAnApp}>
      Submit an App
    </Button>
  );

  let loginDesktopBtn = null;
  let profileDesktopMenu = null;

  if (authCtx.myProfile) {
    profileDesktopMenu = (
      <Menu shadow="md" width={150} position="bottom-end" trigger="hover">
        <Menu.Target>
          <UnstyledButton>
            <Avatar src={authCtx.myProfile.image} alt="profile" />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            key="my-apps"
            leftSection={<IconApps style={{ width: 16, height: 16 }} />}
            component={NextLink}
            href="/my/apps"
          >
            My Apps
          </Menu.Item>
          <Menu.Item
            key="my-profile"
            leftSection={<IconUser style={{ width: 16, height: 16 }} />}
            component={NextLink}
            href="/my/profile"
          >
            My Profile
          </Menu.Item>
          <Menu.Divider key="divider" />
          <Menu.Item
            key="logout"
            leftSection={<IconLogout style={{ width: 16, height: 16 }} />}
            component="button"
            onClick={handleClickLogout}
          >
            Log out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  } else {
    loginDesktopBtn = (
      <Link href="/account/login" legacyBehavior>
        <Button color="blue" size="sm" variant="outline">
          Log in
        </Button>
      </Link>
    );
  }

  const links = menus.map((m) => (
    <Link href={m.href} passHref key={m.key} className={classes.link}>
      {m.label}
    </Link>
  ));

  return (
    <AppShell
      header={{ height: 58 }}
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened, desktop: true } }}
      padding={0}
    >
      <AppShell.Header>
        <div className={classes.inner}>
          <Group>
            <Link href="/" as="/" passHref className={classes['desktop-logo']}>
              <Image src="/logo-full.png" alt="logo" width={200} height={20} />
            </Link>
            <Link href="/" as="/" passHref className={classes['mobile-logo']}>
              <Image src="/logo-simple.png" alt="logo" width={40} height={40} />
            </Link>
            <TextInput
              className={classes.search}
              leftSection={<IconSearch size={16} />}
              placeholder="Search TechHustlers PH"
              onFocus={handleFocusSearch}
            />
          </Group>
          <div className={classes['desktop-right']}>
            <Group className={classes['desktop-right']}>
              {links}
              {loginDesktopBtn}
              {profileDesktopMenu}
              {submitAppDesktopBtn}
            </Group>
          </div>
          <div className={classes['mobile-right']}>
            <Burger opened={opened} onClick={toggleBurger} className={classes.burger} size="sm" />
          </div>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default observer(WebsiteNavbar);
