'use client';

import React, { useState } from 'react';
import {
  Alert, Button, Flex, PasswordInput,
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import ResetPasswordByTokenMtn from '../../gql/ResetPasswordByTokenMtn';

type ResetPasswordProps = {
  email: string;
  token: string;
};

function ResetPassword({ email, token }: ResetPasswordProps) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [resetPasswordByToken] = useMutation(ResetPasswordByTokenMtn);

  const form = useForm({
    initialValues: { password: '' },
    validate: {
      password: (value: string) => {
        if (!value) {
          return 'Password is required';
        }
        return null;
      },
    },
  });

  const handleSubmitForm = async (values: { password: string }) => {
    setIsLoading(true);
    const { password } = values;
    const input = { newPassword: password, email, token };
    try {
      await resetPasswordByToken({ variables: { input } });
      setHasSubmitted(true);
    } catch (error) {
      notifications.show({ color: 'red', message: error.message });
    }
    setIsLoading(false);
  };

  let content = (
    <form onSubmit={form.onSubmit(handleSubmitForm)}>
      <PasswordInput
        label="Password"
        mt="md"
        size="md"
        placeholder="Your new password"
        {...form.getInputProps('password')}
      />
      <Button fullWidth mt="xl" size="md" color="blue" type="submit" loading={isLoading}>
        Reset Password
      </Button>
    </form>
  );

  if (hasSubmitted) {
    content = (
      <>
        <Alert
          icon={<IconInfoCircle size={16} />}
          color="green"
          title="Success"
          variant="light"
        >
          Your password has been successfully reset.
        </Alert>
        <Flex mt={32} justify="center">
          <Link href="/account/login">
            Back To Login
          </Link>
        </Flex>
      </>
    );
  }

  return (
    <AuthPageContainer>
      {content}
    </AuthPageContainer>
  );
}

export default ResetPassword;
