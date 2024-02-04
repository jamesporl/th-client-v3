'use client';

import React, { useContext, useEffect, useState } from 'react';
import Script from 'next/script';
import {
  Alert, Anchor, Button, Flex, PasswordInput, Text, TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { useMutation, useApolloClient } from '@apollo/client';
import { IconAlertCircle } from '@tabler/icons-react';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import LoginMtn from '../../gql/LoginMtn';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';
import AuthContext from '../../../../lib/mobx/Auth';
import useRedirectFromLogin from '../../../../lib/hooks/useRedirectFromLogin';
import MyProfileQry from '../../gql/MyProfileQry';
import LoginWithGoogleMtn from '../../gql/LoginWithGoogleMtn';

function Login() {
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);

  const apolloClient = useApolloClient();

  const redirectFromLogin = useRedirectFromLogin();

  const [login] = useMutation(LoginMtn);
  const [loginWithGoogle] = useMutation(LoginWithGoogleMtn);

  const handleGoogleLoginResponse = async (resp: { credential: string }) => {
    setIsLoading(true);
    try {
      const { data } = await loginWithGoogle(
        { variables: { input: { credential: resp.credential } } },
      );
      const authToken = data.loginWithGoogle;
      setErrorMessage('');
      authCtx.login(authToken);
      const profileRes = await apolloClient.query({
        query: MyProfileQry,
        fetchPolicy: 'network-only',
      });
      const { myProfile } = profileRes.data;
      authCtx.setMyProfile(myProfile);
      redirectFromLogin({ myProfile });
    } catch (error) {
      const message = getErrorMessage(error);
      setErrorMessage(message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // googleScriptLoaded is false when navigating in the browser (ex. login to sign vv)
    if (googleScriptLoaded || window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
        callback: handleGoogleLoginResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google-button-container'),
        { theme: 'outline', size: 'large', width: 336 }, // customization attributes
      );
      window.google.accounts.id.prompt();
    }
  }, [googleScriptLoaded]);

  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value: string) => {
        if (!value) {
          return 'Email is required';
        }
        if (!validateEmailByRegex(value)) {
          return 'Invalid email';
        }
        return null;
      },
      password: (value: string) => {
        if (!value) {
          return 'Password is required';
        }
        return null;
      },
    },
  });

  const handleSubmitForm = async (values: { email: string, password: string }) => {
    setIsLoading(true);
    const { email, password } = values;
    const input = { email, password };
    try {
      const { data } = await login({ variables: { input } });
      const authToken = data.login;
      setErrorMessage('');
      if (authToken) {
        authCtx.login(authToken);
        const profileRes = await apolloClient.query({
          query: MyProfileQry,
          fetchPolicy: 'network-only',
        });
        const { myProfile } = profileRes.data;
        authCtx.setMyProfile(myProfile);
        redirectFromLogin({ myProfile });
      } else {
        const encodedEMail = encodeURIComponent(email);
        window.location.href = `/account/verify-email?email=${encodedEMail}`;
      }
    } catch (error) {
      const message = getErrorMessage(error);
      setErrorMessage(message);
    }
    setIsLoading(false);
  };

  let errorMessageAlert = null;
  if (errorMessage) {
    errorMessageAlert = (
      <Alert
        icon={<IconAlertCircle size={16} />}
        color="red"
        title="Login failed"
        withCloseButton
        variant="light"
        onClose={() => setErrorMessage('')}
        mb={32}
      >
        {errorMessage}
      </Alert>
    );
  }

  return (
    <AuthPageContainer>
      <Script
        src="https://accounts.google.com/gsi/client"
        onLoad={() => setGoogleScriptLoaded(true)}
      />
      {errorMessageAlert}
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
        <TextInput
          label="Email"
          size="md"
          placeholder="Your email"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Button fullWidth mt="xl" size="md" color="blue" type="submit" loading={isLoading}>
          Log in
        </Button>
        <Flex mt={8} justify="center">
          <div id="google-button-container" />
        </Flex>
        <Text size="sm" c="dimmed" fs="italic" mt={8}>
          {'By continuing, you agree to our '}
          <Anchor href="/terms-of-use" target="_blank">
            Terms of Use
          </Anchor>
          {' and '}
          <Anchor href="/privacy-policy" target="_blank">
            Privacy Policy
          </Anchor>
          .
        </Text>
      </form>
      <Flex mt={24} justify="center">
        <Link href="/account/forgot-password" passHref legacyBehavior>
          <Anchor underline="never" fz="sm">
            Forgot password?
          </Anchor>
        </Link>
      </Flex>
      <Text mt={24} c="dimmed" fz={14} fs="italic">
        Don&apos;t have an account? &nbsp;
        <Link href="/account/signup" passHref legacyBehavior>
          <Anchor underline="never" fz="sm">
            Sign up here.
          </Anchor>
        </Link>
      </Text>
    </AuthPageContainer>
  );
}

export default Login;
