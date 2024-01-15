/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  debug: true,
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        noFragmentMasking: true,
      },
      config: {
        skipTypename: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
