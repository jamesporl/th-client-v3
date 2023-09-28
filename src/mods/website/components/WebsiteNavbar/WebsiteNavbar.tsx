'use client';

import React, { ReactNode } from 'react';
import {
  AppShell,
  Burger,
  Button,
  Group,
  Input,
} from '@mantine/core';
import Link from 'next/link';
import { IconSearch } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import classes from './WebsiteNavbar.module.css';

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
  const [opened, { toggle }] = useDisclosure(false);

  const submitAppDesktopBtn = (
    <Button color="blue" size="sm" onClick={() => undefined}>
      Submit an App
    </Button>
  );

  const loginDesktopBtn = (
    <Link href="/account/login" legacyBehavior>
      <Button color="blue" size="sm" variant="outline">
        Log in
      </Button>
    </Link>
  );

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
              <img src="/logo-full.png" alt="logo" width="200px" />
            </Link>
            <Link href="/" as="/" passHref className={classes['mobile-logo']}>
              <img src="/logo-simple.png" alt="logo" width="40px" />
            </Link>
            <Input
              className={classes.search}
              leftSection={<IconSearch size={16} />}
              placeholder="Search TechHustlers PH"
            />
          </Group>
          <div className={classes['desktop-right']}>
            <Group className={classes['desktop-right']}>
              {links}
              {loginDesktopBtn}
              {submitAppDesktopBtn}
            </Group>
          </div>
          <div className={classes['mobile-right']}>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default WebsiteNavbar;
