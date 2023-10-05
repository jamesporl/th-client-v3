'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React, { useContext, useState } from 'react';
import {
  Alert, Button, PasswordInput, TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation, useApolloClient } from '@apollo/client';
import { IconAlertCircle } from '@tabler/icons-react';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import LoginMtn from '../../gql/LoginMtn';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';
import AuthContext from '../../../../lib/mobx/Auth';
import useRedirectFromLogin from '../../../../lib/hooks/useRedirectFromLogin';
import MyProfileQry from '../../gql/MyProfileQry';

function Login() {
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const apolloClient = useApolloClient();

  const redirectFromLogin = useRedirectFromLogin();

  const [login] = useMutation(LoginMtn);

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
        window.location.href = `/account/email-verification?email=${encodedEMail}`;
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
      {errorMessageAlert}
      <form onSubmit={form.onSubmit(handleSubmitForm)}>
        <TextInput
          label="Email/Username"
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
          Log in
        </Button>
      </form>
    </AuthPageContainer>
  );
}

export default Login;
