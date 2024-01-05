'use client';

import React, { useState } from 'react';
import { Alert, Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconInfoCircle } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useMutation } from '@apollo/client';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import validateEmailByRegex from '../../utils/validateEmailByRegex';
import SendPasswordResetLinkMtn from '../../gql/SendPasswordResetLinkMtn';

function ForgotPassword() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [sendPasswordResetLink] = useMutation(SendPasswordResetLinkMtn);

  const form = useForm({
    initialValues: { email: '' },
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
    },
  });

  const handleSubmitForm = async (values: { email: string }) => {
    setIsLoading(true);
    const { email } = values;
    const input = { email };
    try {
      await sendPasswordResetLink({ variables: { input } });
      setHasSubmitted(true);
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
    setIsLoading(false);
  };

  let content = (
    <form onSubmit={form.onSubmit(handleSubmitForm)}>
      <TextInput
        label="Email"
        size="md"
        placeholder="Your email"
        {...form.getInputProps('email')}
      />
      <Button fullWidth mt="xl" size="md" color="blue" type="submit" loading={isLoading}>
        Send Password Reset Link
      </Button>
    </form>
  );

  if (hasSubmitted) {
    content = (
      <Alert
        icon={<IconInfoCircle size={16} />}
        color="blue"
        title="Reset link sent"
        variant="light"
      >
        If you have entered a valid email, you will receive a password reset link from us.
      </Alert>
    );
  }

  return (
    <AuthPageContainer>
      {content}
    </AuthPageContainer>
  );
}

export default ForgotPassword;
