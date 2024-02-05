'use client';

import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Button, PasswordInput, Text, TextInput, Grid, Flex, Anchor,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Script from 'next/script';
import Link from 'next/link';
import { useApolloClient, useMutation } from '@apollo/client';
import { IconAlertCircle } from '@tabler/icons-react';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';
import SignupMtn from '../../gql/SignupMtn';
import LoginWithGoogleMtn from '../../gql/LoginWithGoogleMtn';
import useRedirectFromLogin from '../../../../lib/hooks/useRedirectFromLogin';
import MyProfileQry from '../../gql/MyProfileQry';
import AuthContext from '../../../../lib/mobx/Auth';

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);

  const authCtx = useContext(AuthContext);

  const [signup] = useMutation(SignupMtn);
  const [loginWithGoogle] = useMutation(LoginWithGoogleMtn);

  const apolloClient = useApolloClient();

  const redirectFromLogin = useRedirectFromLogin();

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
    initialValues: {
      email: '', password: '', firstName: '', lastName: '',
    },
    validate: {
      firstName: (value: string) => {
        if (!value) {
          return 'First name is required';
        }
        return null;
      },
      lastName: (value: string) => {
        if (!value) {
          return 'Last name is required';
        }
        return null;
      },
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

  const handleSubmitForm = async (
    values: { firstName: string, lastName: string, email: string, password: string },
  ) => {
    setIsLoading(true);
    const {
      firstName, lastName, email, password,
    } = values;
    const input = {
      firstName, lastName, email, password,
    };
    try {
      await signup({ variables: { input } });
      const encodedEMail = encodeURIComponent(values.email);
      window.location.href = `/account/verify-email?email=${encodedEMail}`;
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
        title="Signup failed"
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
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              size="md"
              {...form.getInputProps('firstName')}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Last Name"
              size="md"
              {...form.getInputProps('lastName')}
            />
          </Grid.Col>
        </Grid>
        <TextInput
          label="Email"
          size="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Button fullWidth mt="xl" size="md" color="blue" type="submit" loading={isLoading}>
          Sign up
        </Button>
        <Flex mt={8} justify="center">
          <div id="google-button-container" />
        </Flex>
        <Text size="sm" c="dimmed" fs="italic" mt={8}>
          {'By continuing, you agree to our '}
          <Anchor href="/terms-of-service" target="_blank">
            Terms of Service
          </Anchor>
          {' and '}
          <Anchor href="/privacy-policy" target="_blank">
            Privacy Policy
          </Anchor>
          .
        </Text>
      </form>
      <Text mt={24} c="dimmed" fz={14} fs="italic">
        Already have an account? &nbsp;
        <Link href="/account/login" legacyBehavior passHref>
          <Anchor underline="never" fz="sm">
            Log in here.
          </Anchor>
        </Link>
      </Text>
    </AuthPageContainer>
  );
}

export default Signup;
