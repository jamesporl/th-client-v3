'use client';

import React from 'react';
import { useMutation } from '@apollo/client';
import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContextModalProps } from '@mantine/modals';
import { useRouter } from 'next/navigation';
import AddAppMtn from '../gql/AddAppMtn';

function NewAppForm({ context, id }: ContextModalProps) {
  const [addApp] = useMutation(AddAppMtn);

  const router = useRouter();

  const form = useForm({
    initialValues: { name: '', shortDesc: '' },
    validate: {
      name: (value: string) => {
        if (!value) {
          return 'Name is required';
        }
        return null;
      },
      shortDesc: (value: string) => {
        if (!value) {
          return 'Tagline is required';
        }
        return null;
      },
    },
  });

  const handleSubmitForm = async (values: { name: string, shortDesc: string }) => {
    const { name, shortDesc } = values;
    const input = { name, shortDesc };
    try {
      const { data } = await addApp({ variables: { input } });
      context.closeContextModal(id);
      router.push(`/my/apps/edit/${data.addApp._id}`);
    } catch (error) {
      // do nothing
    }
  };

  return (
    <>
      <form id="new-app" onSubmit={form.onSubmit(handleSubmitForm)}>
        <TextInput
          label="Name of App"
          size="md"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Tagline"
          mt="md"
          size="md"
          {...form.getInputProps('shortDesc')}
        />
      </form>
      <Group mt={32} justify="flex-end" gap="xs">
        <Button
          color="blue"
          variant="outline"
          onClick={() => context.closeContextModal(id)}
        >
          Cancel
        </Button>
        <Button color="blue" type="submit" form="new-app">Submit</Button>
      </Group>
    </>

  );
}

export default NewAppForm;
