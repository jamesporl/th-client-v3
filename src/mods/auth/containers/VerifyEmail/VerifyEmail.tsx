'use client';

import React, { useState, useCallback, useContext } from 'react';
import {
  Alert, Text, PinInput, Flex, UnstyledButton,
} from '@mantine/core';
import { useApolloClient, useMutation } from '@apollo/client';
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react';
import AuthPageContainer from '../../components/AuthPageLayout/AuthPageLayout';
import getErrorMessage from '../../../../lib/utils/getErrorMessage';
import VerifyAccountByCodeMtn from '../../gql/VerifyAccountByCodeMtn';
import SendVerificationCodeMtn from '../../gql/SendVerificationCodeMtn';
import AuthContext from '../../../../lib/mobx/Auth';
import MyProfileQry from '../../gql/MyProfileQry';
import useRedirectFromLogin from '../../../../lib/hooks/useRedirectFromLogin';

type VerifyEmailProps = {
  email: string;
};

function VerifyEmail({ email }: VerifyEmailProps) {
  const authCtx = useContext(AuthContext);

  const apolloClient = useApolloClient();

  const redirectFromLogin = useRedirectFromLogin();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [verifyAccountByCode] = useMutation(VerifyAccountByCodeMtn);
  const [sendVerificationCode] = useMutation(SendVerificationCodeMtn);

  const handleClickResendCode = useCallback(async () => {
    setIsLoading(true);
    try {
      await sendVerificationCode({ variables: { input: { email } } });
      setErrorMessage('');
      setSuccessMessage('Verification code has been sent to your email');
    } catch (error) {
      const message = getErrorMessage(error);
      setSuccessMessage('');
      setErrorMessage(message);
    }
    setIsLoading(false);
  }, [email]);

  const handleSubmitCode = useCallback(async (code: string) => {
    setIsLoading(true);
    try {
      const { data } = await verifyAccountByCode({ variables: { input: { email, code } } });
      const authToken = data.verifyAccountByCode;
      authCtx.login(authToken);
      const profileRes = await apolloClient.query({
        query: MyProfileQry,
        fetchPolicy: 'network-only',
      });
      const { myProfile } = profileRes.data;
      authCtx.setMyProfile(myProfile);
      redirectFromLogin({ myProfile });
      setErrorMessage('');
    } catch (error) {
      const message = getErrorMessage(error);
      setSuccessMessage('');
      setErrorMessage(message);
    }
    setIsLoading(false);
  }, [email]);

  let errorMessageAlert = null;
  if (errorMessage) {
    errorMessageAlert = (
      <Alert
        icon={<IconAlertCircle size={16} />}
        color="red"
        title="Verification failed"
        withCloseButton
        variant="light"
        onClose={() => setErrorMessage('')}
        mb={32}
      >
        {errorMessage}
      </Alert>
    );
  }

  let successMessageAlert = null;
  if (successMessage) {
    successMessageAlert = (
      <Alert
        icon={<IconCircleCheck size={16} />}
        color="green"
        title="Code sent"
        withCloseButton
        variant="light"
        onClose={() => setSuccessMessage('')}
        mb={32}
      >
        {successMessage}
      </Alert>
    );
  }

  let content = (
    <Flex justify="center">
      <Text>You seem to be in the wrong page.</Text>
    </Flex>
  );

  if (email) {
    content = (
      <>
        <Text mb={32} size="sm">
          A verification has been sent to your email. Please enter the code below to get your
          account verified.
        </Text>
        {errorMessageAlert}
        {successMessageAlert}
        <Flex justify="center">
          <PinInput
            type={/^[0-9]+/}
            inputType="number"
            inputMode="numeric"
            oneTimeCode
            length={6}
            onComplete={handleSubmitCode}
            disabled={isLoading}
          />
        </Flex>
        <Text mt={32} c="dimmed" size="sm">
          If in case you did not get an email with the code or the code has expired, &nbsp;
          <UnstyledButton onClick={handleClickResendCode}>
            <Text c="blue.5" size="sm">
              click here to resend code.
            </Text>
          </UnstyledButton>
        </Text>
      </>
    );
  }

  return (
    <AuthPageContainer>
      {content}
    </AuthPageContainer>
  );
}

export default VerifyEmail;
