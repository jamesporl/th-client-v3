'use client';

import React, { useState } from 'react';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@apollo/client';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import LoginMtn from '../../gql/LoginMtn';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    console.log(values);
    setIsLoading(true);
    const { email, password } = values;
    const input = { email, password };
    try {
      const { data } = await login({ variables: { input } });
      const authToken = data.login;
      console.log(authToken);
      // setErrorMessage('');
      // if (authToken) {
      //   authCtx.login(authToken);
      //   const profileRes = await apolloClient.query({
      //     query: MyProfileQry,
      //     fetchPolicy: 'network-only',
      //   });
      //   const { myProfile } = profileRes.data;
      //   authCtx.setMyProfile(myProfile);
      //   redirectFromLogin({ myProfile });
      // } else if (verificationToken) {
      //   router.push(`/account/verify-email?$token=${verificationToken}`);
      // }
    } catch (error) {
      const message = getErrorMessage(error);
      setErrorMessage(message);
    }
    setIsLoading(false);
  };

  return (
    <AuthPageContainer>
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
