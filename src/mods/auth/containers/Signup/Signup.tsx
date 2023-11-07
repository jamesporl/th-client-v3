'use client';

import React, { useState } from 'react';
import {
  Alert, Button, PasswordInput, Text, TextInput, Grid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { IconAlertCircle } from '@tabler/icons-react';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';
import SignupMtn from '../../gql/SignupMtn';

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [signup] = useMutation(SignupMtn);

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
      </form>
      <Text mt={24} c="dimmed" fz={14} fs="italic">
        Already have an account? &nbsp;
        <Link href="/account/signup">
          Log in here.
        </Link>
      </Text>
    </AuthPageContainer>
  );
}

export default Signup;
